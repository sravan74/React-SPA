import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/number.jsx'
import { Provider } from 'react-redux';
import configureStore from './store/index';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
