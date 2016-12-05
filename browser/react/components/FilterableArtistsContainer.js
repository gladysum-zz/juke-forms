import React from 'react';
import Artists from './Artists';
import FilterInput from './FilterInput';

export default class FilterableArtistsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		};
		this.getInput = this.getInput.bind(this);
	}

	getInput(event) {
		this.setState({
			inputValue: event.target.value
		});
	}

	render() {
		const inputValue = this.state.inputValue;
		const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

		return (
			<div>
				<FilterInput getInput = {this.getInput}/>
				<Artists artists ={filteredArtists} />
			</div>	
		)
	}

}