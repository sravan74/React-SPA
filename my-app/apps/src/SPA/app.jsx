import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import Navbar from './component/navbar.jsx';
import Container from './component/container.jsx';



class App extends Component {
    
    render() {
        return (
            <div>
                <Navbar/>
                <Container/>
            </div>
        )
    }

}



export default App;