import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'

class SprintForm extends Component {
  componentWillMount() {
    this.props.actions.loadSprint(this.props.params.sprintId);
  }

  toggleTicket(id) {
    this.props.actions.toggleTicket(id);
  }

  render() {
    const { name, tickets } = this.props.sprint;
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', base: './tickets/' },
      { caption: 'Название', field: 'name',
        getFooterText: () => 'Сумма'
      },
      { caption: 'Оценка', field: 'mark' },
      { caption: 'Взять', field: 'active', type: 'checkbox',
        onCheck: this.toggleTicket.bind(this),
        getFooterText: () => tickets.reduce((x, y) => {
          const op = y.active ? y.mark : 0;
          return x + op || 0;
        }, 0)
      },
      { caption: 'Создатель', field: 'user' }
    ];

    return (
      <div>
        <h3>Форма спринта</h3>
        {tickets.length ? (
          <div>
            <div>Заявки спринта {name}</div>
            <br/>
            <Grid
              columns={columns}
              rows={tickets}
              showFooter={true}
              isActiveRow={ticket => ticket.active}
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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintForm)
