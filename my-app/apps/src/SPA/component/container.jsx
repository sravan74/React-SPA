import React from 'react';
import {
    Router,
    Route,
    Switch,
    hashHistory
} from 'react-router';

import { createHashHistory } from 'history';
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

const Container = () => {
    return (
        <Router history={createHashHistory(hashHistory)}>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>

        </Router>
    )

}
export default Container;