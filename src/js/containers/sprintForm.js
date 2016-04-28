import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'

class SprintForm extends Component {
  componentWillMount() {
    this.props.actions.loadSprint(this.props.params.sprintId);
  }

  onToggleTicket() {
    this.toggleTicket(this.id);
  }

  render() {
    const { name, tickets } = this.props.sprint;
    const { toggleTicket } = this.props.actions;

    return (
      <div>
        <h3>Форма спринта</h3>
        {tickets.length ? (
          <div>
            <div>Заявки спринта {name}</div>
            <table className="grid">
              <tbody>
                <tr>
                  <th>Название</th><th>Оценка</th><th>Взять</th>
                </tr>
                {tickets.map((ticket, index) => {
                  return (
                    <tr key={index} className={ticket.active ? 'active' : ''}>
                      <td>
                        {ticket.name}
                      </td>
                      <td>
                        {ticket.mark}
                      </td>
                      <td>
                        <input type="checkbox"
                          onChange={this.onToggleTicket.bind({
                            toggleTicket,
                            id: ticket.id
                          })}
                          checked={ticket.active}/>
                      </td>
                    </tr>
                    );
                  })}
                <tr>
                  <td><b>Сумма</b></td>
                  <td>
                    {tickets.reduce((x, y) => {
                      const op = y.active ? y.mark : 0;
                      return x + op || 0;
                    }, 0)}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
