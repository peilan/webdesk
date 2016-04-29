import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'
import Label from '../components/controls/label'
import TextBox from '../components/controls/textBox'
import CheckBox from '../components/controls/checkBox'

export default class TicketForm extends Component {
  componentWillMount() {
    this.props.actions.loadTicket(this.props.params.ticketId);
  }

  render() {
    const { ticket } = this.props;

    return (
      <div>
        <h3>Форма заявки</h3>
        {Object.keys(ticket).length ? (
          <div>
            <Label value="Id"/><TextBox value={ticket.id} readOnly={true}/>
            <br/>
            <Label value="Название"/><TextBox value={ticket.title}/>
            <br/>
            <Label value="Оценка"/><TextBox value={ticket.raiting}/>
            <br/>
            <Label value="Взять"/><CheckBox value={ticket.taken}/>
          </div>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ticket: {
      ...state.tickets[ownProps.params.ticketId],
      ...{ id: ownProps.params.ticketId }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm)
