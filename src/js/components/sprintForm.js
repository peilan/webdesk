import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class SprintForm extends Component {
  componentWillMount() {
    this.props.actions.loadProjects();
  }

  onToggleTicket() {

  }

  render() {
    const { name, tickets } = this.props.sprint;
    const total = 10;

    return (
      <div>
        <h3>Форма спринта</h3>
        <div>Заявки спринта {this.props.params.sprintId} ({name})</div>
        <table className="tickets">
          <tbody>
            <tr>
              <th>Название 5</th><th>Оценка</th><th>Взять</th>
            </tr>
            {tickets && tickets.map((ticket, index) => {
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
                      onChange={this.onToggleTicket.bind(this)}
                      checked={ticket.active}/>
                  </td>
                </tr>
                );
              })}
            <tr>
              <td><b>Total</b></td><td>{total}</td><td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sprint: state.sprint || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintForm)
