import React from 'react';
import NewPlaylist from './NewPlaylist';
import axios from 'axios';

export default class NewPlayListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			submitDisable: false
		};
	}

	getInput(event) {
		this.setState({
			inputValue: event.target.value,
			submitDisable: (event.target.value.length === 0 || event.target.value.length > 16)
		});

	}

	handleSubmit(event) {
		event.preventDefault();
console.log(this.state.inputValue);
		axios.post('/api/playlists', {playlist: "dummy"})
		  .then(res => res.data)
		  .then(result => {
		    console.log(result) // response json from the server!
		  })
		  .catch(console.error);

		
	}

	

	render() {
		console.log("test", this.state.submitDisable, this.state.inputValue.length);
		return (
			<div>
				<NewPlaylist inputValue = {this.state.inputValue} getInput = {this.getInput.bind(this)} handleSubmit = {this.handleSubmit.bind(this)} />
				{this.state.submitDisable ? <div className="alert alert-warning">Please enter a name</div> : null}

			</div>
		)
		
	}
}