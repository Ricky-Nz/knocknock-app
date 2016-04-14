import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/lib/snackbar';

class MessageToast extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
		this.onDismiss = this.onDismiss.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.toast !== this.props.toast) {
			this.setState({show: true});
		}
	}
	onDismiss() {
		this.setState({show: false});
	}
	render() {
		const toast = this.props.toast;

		return (
      <Snackbar open={this.state.show} message={toast.message||''}
        autoHideDuration={2500} onRequestClose={this.onDismiss}/>
		);
	}
}

MessageToast.propTypes = {
	toast: PropTypes.object
};

const styles = {
	success: {
		color: 'green'
	},
	failed: {
		color: 'red'
	}
}

export default MessageToast;
