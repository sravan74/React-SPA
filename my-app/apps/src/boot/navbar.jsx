import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';



var Navbar = React.createClass({
    getInitialState: function () {
      return {
          content:{
              'home': <Home/>,
              'about': <About/>,
              'contact': <Contact/>,
          },
          selected:<Home/>,
      }
    },

    contentChange:function(page){
        let con = this.state.content[page];
        this.setState({selected:con});
    },

    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#" onClick={this.contentChange.bind(null,'home')}>Home</a></li>
                                <li><a href="#about" onClick={this.contentChange.bind(null,'about')}>About</a></li>
                                <li><a href="#contact" onClick={this.contentChange.bind(null,'contact')}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid spacing">

                    <div className="starter-template">
                        <h1>Bootstrap starter template</h1>
                        <div className="lead">{this.state.selected}</div>
                    </div>

                </div>
            </div>
        )
    }
});
module.exports = Navbar;
