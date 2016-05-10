import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Spinner from '../components/controls/spinner'
import Label from '../components/controls/label'
import TextBox from '../components/controls/textBox'
import { fetchNeeds } from '../utils/fetchComponentData'

class ContractForm extends Component {
  static get needs() {
    return [actions.loadContract];
  }

  componentDidMount() {
    fetchNeeds(ContractForm.needs, this.props);
  }

  fieldChanged(field, value) {
    this.props.actions.changeContract(this.props.params.contractId, {
      [field]: parseInt(value)
    });
  }

  render() {
    const { contract } = this.props;

    return (
      <div>
        <h3>Форма заявки</h3>
        {Object.keys(contract).length ? (
          <div>
            <Label value="Id"/>
            <TextBox source={contract} field="id" readOnly={true}/>
            <br/>
            <Label value="Дни"/>
            <TextBox source={contract} field="days" onChange={this.fieldChanged.bind(this)}/>
            <br/>
            <Label value="Сотрудник"/>
            <TextBox source={contract} field="developer" readOnly={true}/>
          </div>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    contract: {
      ...state.contracts[ownProps.params.contractId],
      ...{ id: ownProps.params.contractId },
      developer: state.users[state.contracts[ownProps.params.contractId].developer].name
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractForm)
