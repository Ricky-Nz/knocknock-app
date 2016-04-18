import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconPayment from 'material-ui/svg-icons/action/payment';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { ActionBar, LoadingProgress } from '../widgets';
import { PaymentProcessingDialog } from '../containers';

class WalletPage extends Component {
	constructor(props) {
		super(props);
		this.state = { amount: 50 };
		this.onTopupChange = this.onTopupChange.bind(this);
		this.onPay = this.onPay.bind(this);
		this.onPayReturnSuccess = this.onPay.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
	}
	componentDidMount() {
		!this.props.user&&this.props.loadUser();
	}
	onTopupChange(event) {
		this.setState({amount: event.target.value});
	}
	onPay() {
		if (!this.state.amount || !(this.state.amount > 0)) {
			this.props.toast('Please enter topup amount');
			return;
		}

		this.props.topUp(parseInt(this.state.amount));
	}
	onRefresh() {
		this.props.loadUser(true);
	}
	render() {
		const { onMenuClick, user, loading } = this.props;

		return (
			<div className='fillHeight page'>
				<ActionBar title='My Wallet' leftIcon={this.props.onMenuClick?<IconMenu/>:<IconArrowBack/>}
					onLeftMenuClicked={onMenuClick||this.context.router.goBack}
					rightIcon={<IconRefresh/>} onRightMenuClicked={this.onRefresh} running={loading}/>
				<div className='flex flex-fill position-relative'>
					{(loading||!user)?<LoadingProgress/>:
						<div className='padding scroll'>
							<div zDepth={1}>
								<Subheader>Knocknock Credits</Subheader>
								<p style={styles.creditText}>{`S$${user.credit}`}</p>
							</div>
							<div className='padding'>
								<TextField value={this.state.amount} onChange={this.onTopupChange}
									hintText='enter top up amount' floatingLabelText='Top up' type='number'/>
								<div className='flex flex-row padding-top'>
									<RaisedButton onClick={this.onPay} label='Pay by Paypal' labelPosition='after' icon={<IconPayment/>}/>
								</div>
								<PaymentProcessingDialog onSuccess={this.props.loadUser}/>
							</div>
						</div>
					}
				</div>
			</div>
		);
	}
}

WalletPage.contextTypes = {
  router: React.PropTypes.object
};

WalletPage.propTypes = {
	onMenuClick: PropTypes.func.isRequired,
	loadUser: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired,
	topUp: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	user: PropTypes.object
};

const styles = {
	creditText: {
		paddingLeft: 16,
		color: blueGrey500,
		fontSize: '2.0em'
	}
};

export default WalletPage;