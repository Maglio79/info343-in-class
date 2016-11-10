import React from "react";

var BaseURL = "http://image.tmdb.org/t/p/w154";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <img src= {BaseURL + this.props.movie.poster_path}/>
                <p>{this.props.movie.overview}</p>
            </div>
        );
    }
}