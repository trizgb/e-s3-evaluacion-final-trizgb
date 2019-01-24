import React, { Component } from 'react';
import { getCharacters } from './services/HPService';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { Switch, Route } from 'react-router-dom';
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

          <Switch>
            <Route exact path="/" render={() => <Filter actionFilter={this.getQuery} />} />
          </Switch>

        </header>

        <main className="app__main">
          <Switch>
            <Route exact path="/" render={() => <CharacterList filterCharResults={filterCharResults} /> } />
            <Route path="/character/:id" render={props => <CharacterDetail match={props.match} filterCharResults={filterCharResults} charId={1} /> }  />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
