import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import Root from './root';
import Footer from './footer/footer'
import { BrowserRouter as Router, Route, } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerMenudata: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'GIT APP',
          url: '/git'
        },
        {
          name: 'Whether APP',
          url: '/whether'
        },
        {
          name: 'YouTube APP',
          url: '/yt'
        },
      ],
      author: 'Sahil'
    }
  }

  handlechangeMenu = (newMenu) => {
    this.setState({ currentPage: newMenu });
  }


  render() {
    return (
        <Router>
          <div>
            <Header
              headerMenudata={this.state.headerMenudata}
              chahngeMenu={this.handlechangeMenu}
            />
            <Root author={this.state.author} />
            <Footer text={`XYZ.com`} />
          </div>
        </Router>
    );
  }
}

export default App;
