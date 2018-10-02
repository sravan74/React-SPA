import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import Profiles from './Component/Profiles.jsx';
import Search from './Component/Search.jsx';

class App extends Component {
    constructor(props) {
        console.log('Constructing');
        super(props);
        this.state = {
            username: 'stephen',
            userData: [],
            userRepos: [],
        };
      
    }

    getUserData() {
        let url = `https://api.github.com/users/${this.state.username}?access_token=${this.props.token}`;
        jQuery.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                this.setState({ userData: data })
            }.bind(this)
        })
    }

    getRepoData() {
        let url = `https://api.github.com/users/${this.state.username}/repos?access_token=${this.props.token}`;
        jQuery.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                this.setState({ userRepos: data })
            }.bind(this)
        })
    }

    componentWillMount(){
        console.log('Component Will mount');
    }
    componentDidMount(){
        console.log('Component Did mount');
        this.getUserData();
        this.getRepoData();
    }

    handleOnSubmitForm(username){
        this.setState({username:username},()=>{
            this.getUserData();
            this.getRepoData();
        });        
    }

    render() {
        console.log('Rendering Component');
        return (
            <div>
                <Search handleOnSubmitForm={this.handleOnSubmitForm.bind(this)}/>
                <Profiles {...this.state} />
            </div>
        )
    }

}

App.propTypes = {
    token: React.PropTypes.string
}

App.defaultProps = {
    token: '15ceb14070f5f41d4296d675e6f4138894ce4429'
}

export default App;