import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'

export default class TicketForm extends Component {
  componentWillMount() {
    this.props.actions.loadTicket(this.props.params.ticketId);
  }

  render() {
    const { ticket } = this.props;

    return (
      <div>
        <h3>Форма заявки</h3>
        {ticket ? (
          <div>
            <div>Заявка {ticket.title}</div>
          </div>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ticket: state.tickets[ownProps.params.ticketId] || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm)
