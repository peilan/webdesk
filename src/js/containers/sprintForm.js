import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'
import { fetchNeeds } from '../utils/fetchComponentData'

class SprintForm extends Component {
  static get needs() {
    return [actions.loadSprint];
  }

  componentDidMount() {
    fetchNeeds(SprintForm.needs, this.props);
  }

  changeTicket(id, value) {
    this.props.actions.changeTicket(id, {
      taken: value
    });
  }

  render() {
    const { title, tickets } = this.props.sprint;
    const { projectId, sprintId } = this.props.params;
    const getUrl = id => {
      return `/projects/${projectId}/sprints/${sprintId}/tickets/${id}`
    }
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', getUrl },
      { caption: 'Название', field: 'title',
        getFooterText: () => 'Сумма'
      },
      { caption: 'Оценка', field: 'rating',
        getFooterText: () => tickets.reduce((x, y) => {
          const op = y.taken ? parseFloat(y.rating, 10) : 0;
          return x + op || 0;
        }, 0)
      },
      { caption: 'Взять', field: 'taken', type: 'checkbox',
        onCheck: this.changeTicket.bind(this)
      },
      { caption: 'Создатель', field: 'user' }
    ];

    return (
      <div>
        <h3>Форма спринта</h3>
        {(Object.keys(this.props.sprint).length > 1) ? (
          <div>
            <div>Заявки спринта {title}</div>
            <br/>
            <Grid
              columns={columns}
              rows={tickets}
              showFooter={true}
              isActiveRow={ticket => ticket.taken}
            />
          </div>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const sprint = state.sprints[ownProps.params.sprintId] || {};
  return {
    sprint: {
      ...sprint,
      tickets: sprint.tickets ? sprint.tickets.map(id => {
        return {
          ...{ id },
          ...state.tickets[id]
        }
      }) : []
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintForm)
