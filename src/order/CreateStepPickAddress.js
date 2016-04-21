import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { EmptyView } from '../app_widgets';
import { AddressList, AddressListItem } from '../address';

class CreateStepChooseAddress extends Component {
  onAddAddress = () => {
    this.context.router.push('/address');
  }
	render() {
    const = { selectAddress, stepSelectAddress } = this.props;

		return (
      <div>
        <Subheader>Selected</Subheader>
        {selectAddress?
          <Paper className='half-margin' zDepth={1}>
            <AddressListItem {...selectAddress} rightIconButton={<IconButton><IconCheck/></IconButton>}/>
          </Paper>:
          <div className='flex flex-center flex-align-center padding'>not selected</div>
        }
        <Subheader>All Addresses</Subheader>
        <AddressList paper={true} selectable={true} selectItem={selectAddress}
          onItemClicked={stepSelectAddress}
          emptyView={<EmptyView text='you havnt add any addresses yet' actionNode={<RaisedButton label='Add Address' onClick={this.onAddAddress}/>}/>}/>
      </div>
		);
	}
}

CreateStepChooseAddress.contextTypes = {
  router: PropTypes.object
};

CreateStepChooseAddress.propTypes = {
	selectAddress: PropTypes.object,
	stepSelectAddress: PropTypes.func.isRequired
};

export default CreateStepChooseAddress;