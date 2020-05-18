import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from '../views/detail';
import List from '../components/list';

const RoutesContainer = () => {
    return (
        <Router>
            <Route component={Routes}></Route>
        </Router>
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={List} />
            <Route path={'/character/:id'} component={Detail} />
        </Switch>
    )
}

export default RoutesContainer;