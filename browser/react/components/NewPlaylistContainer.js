import React from 'react';
import {Link} from 'react-router';
import NewPlaylist from './NewPlaylist';
import axios from 'axios';

export default class NewPlayListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			submitDisable: false
		};

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	getInput(event) {
		this.setState({
			inputValue: event.target.value,
			submitDisable: (event.target.value.length === 0 || event.target.value.length > 16)
		});
	}

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
  }

	render() {
		return (
			<div>
				<NewPlaylist inputValue = {this.state.inputValue} getInput = {this.getInput.bind(this)} handleSubmit={this.handleFormSubmit}/>
				{this.state.submitDisable ? <div className="alert alert-warning">Please enter a name</div> : null}

			</div>
		)

	}
}
