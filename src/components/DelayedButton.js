// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

	clickerButton = (e) => {
		e.persist();
		setTimeout(() => {
			this.props.onDelayedClick(e);
			 }, this.props.delay);
	}

	render() {
		return(
			<button onclick = {this.clickerButton}>hi</button>
		)
	}
}