import React, { Component } from 'react';
import { getCharacters } from './services/HPService';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
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
         <Filter actionFilter={this.getQuery}/>
        </header>
        <main className="app__main">
         <CharacterList filterCharResults={filterCharResults}/>
        </main>
      </div>
    );
  }
}

export default App;
