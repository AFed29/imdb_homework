import React, {Component} from 'react';
import FilmList from '../components/FilmList.js'

class OpeningThisWeek extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { id: 1, title: "Sherlock Gnomes"},
        { id: 2, title: "Life of the Party"},
        { id: 3, title: "Breaking In"},
        { id: 4, title: "Entebbe"},
        { id: 5, title: "Redoubtable"},
        { id: 6, title: "How to Talk to Girls at Parties"},
        { id: 7, title: "Revenge"},
        { id: 8, title: "Anon"},
        { id: 9, title: "The Cured"}
      ]
    }
  }

  render() {
    return (
      <div className="opening-this-week">
        <h1>Films opening</h1>
        <FilmList data={ this.state.data }/>
      </div>
    )
  }
}

export default OpeningThisWeek;
