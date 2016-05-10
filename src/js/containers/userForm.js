import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'
import Label from '../components/controls/label'
import TextBox from '../components/controls/textBox'
import { fetchNeeds } from '../utils/fetchComponentData'

class UserForm extends Component {
  static get needs() {
    return [actions.loadUser];
  }

  componentDidMount() {
    fetchNeeds(UserForm.needs, this.props);
  }

  fieldChanged(field, value) {
    this.props.actions.changeContract(this.props.params.userId, {
      [field]: value
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h3>Сотрудник</h3>
        {Object.keys(user).length ? (
          <div>
            <Label value="Id"/>
            <TextBox source={user} field="id" readOnly={true}/>
            <br/>
            <Label value="Имя"/>
            <TextBox source={user} field="name" onChange={this.fieldChanged.bind(this)}/>
            <br/>
            <Label value="Роль"/>
            <TextBox source={user} field="role" onChange={this.fieldChanged.bind(this)}/>
          </div>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: {
      ...state.users[ownProps.params.userId],
      ...{ id: ownProps.params.userId }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
