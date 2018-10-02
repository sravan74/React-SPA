import React from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import Search from '../whetherApp/component/whether/search'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLoadingStatus, updateSearchterm, getProfileData, getrepoData } from '../actions/git'

class Git extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.repos.length == 0) {
            this.getRequiredData(this.props.term)
        }
    }

    handleClick = (term) => {
        this.props.updateSearchtermAction(term);
        this.getRequiredData(term)
    }

    getRequiredData = (term) => {
        this.props.getProfileDataAction(term).then(() => {
            this.props.getrepoDataAction();
            this.props.updateLoadingStatusAction(true);
        }).catch((err)=>{
            alert('Network Error Occured, Please try again later')
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>GIthub APP</h1>
                <Search placeholder="Enter Username" term={this.props.term} handleClick={this.handleClick} />
                {!this.props.dataLoaded
                    ? 'Loading....'
                    : <Profile userData={this.props.userData} userRepos={this.props.repos} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        term: state.git.term,
        userData: state.git.userData,
        dataLoaded: state.git.dataLoaded,
        repos: state.git.repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLoadingStatusAction: bindActionCreators(updateLoadingStatus, dispatch),
        updateSearchtermAction: bindActionCreators(updateSearchterm, dispatch),
        getProfileDataAction: bindActionCreators(getProfileData, dispatch),
        getrepoDataAction: bindActionCreators(getrepoData, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Git);

