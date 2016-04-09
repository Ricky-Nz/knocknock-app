import React, { Component, PropTypes } from 'react';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className='fillHeight' style={styles.container}>

			</div>
		);
	}
}

const styles = {
	container: {
		position: 'relative'
	},
	floatBtn: {
		position: 'absolute',
		right: 20,
		bottom: 80
	}
};

export default CreateOrderPage;