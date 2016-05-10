import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'
import { fetchNeeds } from '../utils/fetchComponentData'

class ContractList extends Component {
  static get needs() {
    return [actions.loadSprint];
  }

  componentDidMount() {
    fetchNeeds(ContractList.needs, this.props);
  }

  render() {
    const { sprint } = this.props;
    const { projectId, sprintId } = this.props.params;
    const getUrl = id => {
      return `/projects/${projectId}/sprints/${sprintId}/contracts/${id}`
    };
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', getUrl },
      { caption: 'Сотрудник', field: 'developer' },
      { caption: 'Дни', field: 'days' }
    ]

    return (
      <div>
        <h3>Контракты</h3>
        <div>Контракты спринта {sprint.title}</div>
        <br/>
        {(Object.keys(sprint).length > 1) ? (
          <Grid columns={columns} rows={sprint.contracts}/>
          ) : <Spinner/>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const sprint = state.sprints[ownProps.params.sprintId] || {};
  return {
    sprint: {
      ...sprint,
      ...{
        contracts: sprint.contracts ? sprint.contracts.map(id => {
          return {
            ...{ id },
            ...state.contracts[id],
            developer: state.users[state.contracts[id].developer].name
          }
        }) : []
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractList)
