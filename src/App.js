import * as React from 'react';
import { getCharacters } from './services/HPService';
import Search from './components/search/index';
import List from './components/list/index';
import Detail from './views/detail/index';
import { Switch, Route } from 'react-router-dom';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
// import PropTypes from 'prop-types';


const App = (props) => {
  const [results, setResults] = React.useState([]);
  const [search, setSearch] = React.useState('');


  function filterCharacters() {
    const filteredResults = results.filter(item => {
      const name = item.name;
      if (name.toLocaleUpperCase().includes(search.toLocaleUpperCase())) {
        return true;
      } else {
        return false;
      }
    })
    return filteredResults;
  }

  React.useEffect(() => {

  }, [search, results]);

  React.useEffect(() => {
    getCharacters()
      .then(data => {
        const cleanData = data.map((item, index) => { return { ...item, id: index } });
        setResults(cleanData);
      })

  }, []);

  return (
    <div className="app">
      <Header title={'harry potter characters'}>
        <Route exact path={'/'} render={() => <Search onKeyUpAction={(e) => {
          filterCharacters();
          setSearch(e.currentTarget.value)
        }} />} />
      </Header>
      <main className="main">
        <Switch>
          <Route exact path={'/'} render={() => <List items={results} />} />
          <Route path={'/character/:id'} render={() => <Detail match={props.match} filterResults={results} charId={1} />} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App;
