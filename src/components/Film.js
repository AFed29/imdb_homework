import React, {Component} from 'react';

class Film extends Component {


  render() {
    const url = () => {
      const temp = this.props.title.toLowerCase();
      return temp.replace(/ /g, '-');
    }

    return (
      <div className="film">
        <a href={`/films/${url()}`}>{this.props.title}</a>
        <a href={`/showtimes/${url()}`}>Showtimes</a>
      </div>
    )
  }
}

export default Film;
