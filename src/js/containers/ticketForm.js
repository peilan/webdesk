import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'
import Label from '../components/controls/label'
import TextBox from '../components/controls/textBox'
import CheckBox from '../components/controls/checkBox'
import Memo from '../components/controls/memo'

export default class TicketForm extends Component {
  componentDidMount() {
    this.props.actions.loadTicket(this.props.params);
  }

  fieldChanged(field, value) {
    this.props.actions.changeTicket(this.props.params.ticketId, {
      [field]: value
    });
  }

  render() {
    const { ticket } = this.props;

    return (
      <div>
        <h3>Форма заявки</h3>
        {Object.keys(ticket).length ? (
          <div>
            <Label value="Id"/>
            <TextBox source={ticket} field="id" readOnly={true}/>
            <br/>
            <Label value="Название"/>
            <TextBox source={ticket} field="title" onChange={this.fieldChanged.bind(this)}/>
            <br/>
            <Label value="Оценка"/>
            <TextBox source={ticket} field="rating" onChange={this.fieldChanged.bind(this)}/>
            <br/>
            <Label value="Взять"/>
            <CheckBox source={ticket} field="taken" onChange={this.fieldChanged.bind(this)}/>
            <br/>
            <Label value="Описание"/>
            <br/>
            <Memo source={ticket} field="description" onChange={this.fieldChanged.bind(this)}/>
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
