import React from 'react';
//var temp2 = ;

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return <p className="center-text">{this.props.dopeData.main.temp}</p>;
	}
}