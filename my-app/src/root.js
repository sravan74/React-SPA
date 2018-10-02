import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Git from './git/index';
import WhetherApp from './whetherApp/component/Main';
import YT from './YT/App';

const HomePage = () => {
    return (
        <h1>Home Page</h1>
    )
}

const Root = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/git" component={Git} />
            <Route path="/whether" component={WhetherApp} />
            <Route path="/yt" component={YT} />
        </div>
    )
}

export default Root