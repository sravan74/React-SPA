import React from 'react';
import './dashboard.css';
import Search from '../whether/search';
import WhetherTable from '../whether/whether-table';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchCity, updateLoadingStatus, getCityData } from '../../../actions/whether';


const API_KEY = '44394f5da5066039de5a5a786d176c62';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        if (!this.props.status) {
            this.getCityData(this.props.city);
        }
    }

    getCityData = (city) => {
        this.props.getCityDataAction(city).then(() => {
            this.props.updateLoadingStatusAction(true)
        })
    }

    handleClick = city => {
        this.props.updateSearchCityAction(city);
        this.getCityData(city)
    }

    render() {

        return (
            <div className="container">
                <Search placeholder="Enter City Name" term={this.props.city} handleClick={this.handleClick} />
                {
                    this.props.status ? <WhetherTable data={this.props.data} /> : null
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        city: state.wheather.city,
        status: state.wheather.status,
        data: state.wheather.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLoadingStatusAction: bindActionCreators(updateLoadingStatus, dispatch),
        updateSearchCityAction: bindActionCreators(updateSearchCity, dispatch),
        getCityDataAction: bindActionCreators(getCityData, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


