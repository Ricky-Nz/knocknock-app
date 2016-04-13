import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import { LoadingProgress } from '../widgets';

class OrderDetailPage extends Component {
	constructor(props) {
		super(props);
		this.onClosePage = this.onClosePage.bind(this);
	}
	componentDidMount() {
		!this.props.loading&&!this.props.order&&this.props.load();
	}
	onClosePage() {
		this.context.router.goBack();
	}
	render() {
		// const {} = this.props.order;

		return (
			<div className='flex flex-fill page'>
			  <AppBar title='Order Detail'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}/>
				{this.props.loading?<LoadingProgress/>:
					<div className='flex flex-fill'>
					</div>
				}
			</div>
		);
	}
}

OrderDetailPage.contextTypes = {
  router: PropTypes.object
};

OrderDetailPage.propTypes = {
	order: PropTypes.object,
	loading: PropTypes.bool,
	load: PropTypes.func.isRequired
};

export default OrderDetailPage;