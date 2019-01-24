import React, { Component } from 'react';
import { getCharacters } from './services/HPService';
import './App.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
    // this.getCharactersHP();
    this.getQuery = this.getQuery.bind(this);
  }

  componentDidMount() {
    this.getCharactersHP();
  }

  getQuery(e) {
    const characterQuery = e.currentTarget.value;
    this.setState({
      query: characterQuery
    });

  }

  filterCharacters() {
    const filteredResults = this.state.results.filter(item => {
      const name = item.name;
      if (name.toLocaleUpperCase().includes(this.state.query.toLocaleUpperCase())) {
        return true;
      } else {
        return false;
      }
    })
    return filteredResults;
  }

  getCharactersHP() {
    getCharacters()
      .then(data => {

        const cleanData = data.map((item, index) => { return { ...item, id: index } });

        this.setState({
          results: cleanData
        });
      })
  }

  render() {
    const filterCharResults = this.filterCharacters();

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">harry potter characters</h1>
          <div className="app__filter">
            <input type="text" className="app__filter-name" placeholder="Search the character" onKeyUp={this.getQuery} />
          </div>
        </header>
        <main className="app__main">
          <ul className="app__list">
            {filterCharResults.map(item => {
              return (
                <li className="app__list-character" key={item.id}>
                  <div className="character">
                    <div className="character__image-container">
                      <img className="character__image" src={item.image} alt={item.name}/>
                    </div>
                    <h2 className="character__name">{item.name}</h2>
                    <p className="character__house">{item.house}</p>
                  </div>
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
