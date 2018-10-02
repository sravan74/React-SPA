import React, { Component } from 'react';
// import Header from './header/header'
// import Footer from './footer/footer'
import Dashboard from './dashboard/dashboard'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            footertext: 'CopyRight WBC .com from Footer Component',
            headerLogo: 'Nike',
            currentPage: 'Home',
            headerMenudata: [
                {
                    name: 'Home',
                    url: 'xyz.com'
                },
                {
                    name: 'About',
                    url: 'xyz.com/about'
                },
                {
                    name: 'Skills',
                    url: 'xyz.com/skills'
                },
                {
                    name: 'Gallery',
                    url: 'xyz.com/gallery'
                },
                {
                    name: 'Contact Us',
                    url: 'xyz.com/contact_us'
                },
            ]
        }
    }

    handlechangeMenu = (newMenu) => {
        this.setState({currentPage:newMenu});
    }

    handleLogoChange = (logotext) =>{
        this.setState({headerLogo:logotext})
    }

    render() {
        return (
            <div>
                {/* <Header
                    headerMenudata={this.state.headerMenudata}
                    logo={this.state.headerLogo}
                    chahngeMenu={this.handlechangeMenu}
                /> */}
                <Dashboard logoChange = {this.handleLogoChange} currentPage={this.state.currentPage}/>
                {/* <Footer text={this.state.footertext} /> */}
            </div>
        )
    }
}

export default Main;

