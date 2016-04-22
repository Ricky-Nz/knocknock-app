import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey500 } from 'material-ui/styles/colors';
import { Page, LoadingProgress, EditText } from '../app_widgets';
import { RefreshUserMenu } from '../user';
import PaypalProcessDialogContainer from './PaypalProcessDialogContainer';

class WalletPage extends Component {
	onPay = () => {
		const amount = this.refs.amount.getValidValue();
		if (amount === null) {
			return;
		}

		this.props.topUpByPaypal(parseInt(amount));
	}
	render() {
		const navCallback = this.props.location.query.navCallback;
		const { user, processing } = this.props;

		return (
			<Page title='My Wallet'
				navCallback={this.props.location.query.navCallback}
				rightMenu={<RefreshUserMenu/>}>
				{(processing||!user)?<LoadingProgress/>:
					<div className='padding scroll'>
						<div zDepth={1}>
							<Subheader>Knocknock Credits</Subheader>
							<p style={styles.creditText}>{`S$${user.credit}`}</p>
						</div>
						<div className='padding'>
							<EditText ref='amount' value={50} hintText='enter top up amount' floatingLabelText='Top up' type='number'
								errorMessage='minial top up amount is S$50' verify={/^([5-9]\d|\d{3,})$/}/>
							<div className='flex flex-row padding-top'>
								<RaisedButton onClick={this.onPay} label='Pay by Paypal' labelPosition='after' icon={<IconPayment/>}/>
							</div>
							<PaypalProcessDialogContainer/>
						</div>
					</div>
				}
			</Page>
		);
	}
}

WalletPage.contextTypes = {
  router: React.PropTypes.object
};

WalletPage.propTypes = {
	processing: PropTypes.bool,
	user: PropTypes.object,
	topUpByPaypal: PropTypes.func.isRequired
};

const styles = {
	creditText: {
		paddingLeft: 16,
		color: blueGrey500,
		fontSize: '2.0em'
	}
};

export default WalletPage;