import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'
import Button from '../components/controls/button'
import { fetchNeeds } from '../utils/fetchComponentData'

class UserList extends Component {
  static get needs() {
    return [actions.loadUsers];
  }

  componentDidMount() {
    fetchNeeds(UserList.needs, this.props);
  }

  render() {
    const { users } = this.props;
    const getUrl = id => {
      return `/users/${id}`
    };
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', getUrl },
      { caption: 'Имя', field: 'name' },
      { caption: 'Роль', field: 'role' }
    ]

    return (
      <div>
        <h3>Реестр пользователей</h3>
        <Button
          value="Обновить"
          onClick={() => this.props.actions.loadUsers({}, true)}
        />
        {users.length ? (
          <Grid columns={columns} rows={users}/>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: Object.keys(state.users).map((id) => {
      return { ...state.users[id], ...{ id } };
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
