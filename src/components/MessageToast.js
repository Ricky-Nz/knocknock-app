import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/lib/snackbar';

class MessageToast extends Component {
	constructor(props) {
		super(props);
		this.state = { toast: false };
		this.onDismiss = this.onDismiss.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.error !== this.props.error) {
			this.setState({toast: true});
		}
	}
	onDismiss() {
		this.setState({toast: false});
	}
	render() {
		return (
      <Snackbar open={this.state.toast} message={this.props.error?this.props.error.message:''}
        autoHideDuration={3000} onRequestClose={this.onDismiss}/>
		);
	}
}

MessageToast.propTypes = {
	error: PropTypes.string
};

export default MessageToast;

