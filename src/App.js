import React, { Component } from 'react';
import {getCharacters} from './services/HPService';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
    this.getCharactersHP();
    this.getQuery = this.getQuery.bind(this);
  }

getQuery(e) {
  const characterQuery = e.currentTarget.value;
  this.setState({
    query: characterQuery
  });

}


getCharactersHP() {
  getCharacters()
    .then(data => {

      const cleanData = data.map((item, index) => {return{...item, id: index}});

      this.setState({
        results: cleanData
      });
    })
}

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app-title">harry potter characters</h1>
          <div className="search">
            <input type="text" className="search-field" placeholder="Search the character" onKeyUp={this.getQuery} />
          </div>
        </header>
        <main className="app__main">
          <ul className="app__list">
              {this.state.results.map((item, index) => {
                return (
                  <li className="app__list-character">
                    <div className="image-container">
                      <img className="image-character" src={item.image} alt={item.name}></img>
                    </div>
                    <h2 className="name-character" id={index} key={index}>{item.name}</h2>
                    <p className="house-character">{item.house}</p>
                  </li>
                )
              })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
