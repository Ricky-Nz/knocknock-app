import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconPayment from 'material-ui/svg-icons/action/payment';
import CircularProgress from 'material-ui/CircularProgress';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { LoadingProgress } from '../widgets';
import { PaymentProcessingDialog } from '../containers';

class WalletPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onRefresh = this.onRefresh.bind(this);
		this.onTopupChange = this.onTopupChange.bind(this);
		this.onPay = this.onPay.bind(this);
		this.onPayReturnSuccess = this.onPay.bind(this);
	}
	componentDidMount() {
		!this.props.user&&this.props.loadUser();
	}
	onRefresh() {
		this.props.loadUser();	
	}
	onTopupChange(event) {
		this.setState({amount: event.target.value});
	}
	onPay() {
		if (!this.state.amount || !(this.state.amount > 0)) {
			this.props.toast('Please enter topup amount');
			return;
		}

		this.setState({payAmount: parseInt(this.state.amount)});
	}
	render() {
		return (
			<div className='fillHeight page'>
				<AppBar title='My Wallet'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={this.props.loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
				{(this.props.loading||!this.props.user)?<LoadingProgress/>:
					<div className='flex flex-fill'>
						<Paper className='padding' zDepth={1}>
							<Subheader>Knocknock Credits</Subheader>
							<p style={styles.creditText}>{`S$${this.props.user.credit}`}</p>
						</Paper>
						<div style={styles.container}>
							<TextField value={this.state.amount} onChange={this.onTopupChange}
								hintText='enter top up amount' floatingLabelText='Top up' type='number'/>
							<div className='flex flex-row padding-top'>
								<RaisedButton onClick={this.onPay} label='Pay by Paypal' labelPosition='after' icon={<IconPayment/>}/>
							</div>
							<PaymentProcessingDialog amount={this.state.payAmount} onSuccess={this.onRefresh}/>
						</div>
					</div>
				}
			</div>
		);
	}
}

WalletPage.contextTypes = {
  router: React.PropTypes.object
};

WalletPage.propTypes = {
	onDrawerClick: PropTypes.func.isRequired,
	loadUser: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	user: PropTypes.object
};

const styles = {
	container: {
		padding: '0 32'
	},
	creditText: {
		paddingLeft: 16,
		color: blueGrey500,
		fontSize: '2.0em'
	}
};

export default WalletPage;