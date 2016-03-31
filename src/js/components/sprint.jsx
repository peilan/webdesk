import React from 'react';
import NavLink from './navlink.jsx';
import SprintStore from '../stores/sprintStore.js';

class Ticket extends React.Component {
  constructor() {
    super();

    this.onCheckedChange = this.onCheckedChange.bind(this);
  }

  onCheckedChange() {
    SprintStore.toggleTicket(this.props.sprintId, this.props.data.id);
  }

  getClassName() {
    return this.props.data.active ? 'active' : '';
  }

  render () {
    return (
      <tr className={this.getClassName()}>
        <td>
          {this.props.data.name}
        </td>
        <td>
          {this.props.data.mark}
        </td>
        <td>
          <input type="checkbox" onChange={this.onCheckedChange} checked={this.props.data.active}></input>
        </td>
      </tr>
    );
  }
}

export default class Sprint extends React.Component {
  constructor(props) {
    super();

    this.state = this.getStateFromStore(props);
    this.updateSprint = this.updateSprint.bind(this);
  }

  getStateFromStore(props) {
    const { sprintId } = props ? props.params : this.props.params;

    return {
      sprint: SprintStore.getSprint(sprintId)
    };
  }

  componentDidMount() {
    SprintStore.addChangeListener(this.updateSprint);
  }

  componentWillUnmount() {
    SprintStore.removeChangeListener(this.updateSprint);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromStore(nextProps));
  }

  updateSprint() {
    this.setState(this.getStateFromStore());
  }

  render() {
    let { projectId, sprintId } = this.props.params;
    let { tickets, total } = this.state.sprint;

    return (
      <div>
        <ul role="nav" className="horizontal-menu">
          <li>
            <NavLink to="/projects">Проекты</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}`}>Проект {" " + projectId}</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}/sprints`}>Спринты</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}/sprints/${sprintId}`}>Спринт {" " + sprintId}</NavLink>
          </li>
        </ul>
        <table className="tickets">
          <tbody>
            <tr>
              <th>Название</th><th>Оценка</th><th>Взять</th>
            </tr>
            { tickets.map((ticket) => {
              return (
                  <Ticket key={ticket.id} data={ticket} sprintId={sprintId}/>
                );
              })
            }
            <tr>
              <td><b>Total</b></td><td>{total}</td><td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
