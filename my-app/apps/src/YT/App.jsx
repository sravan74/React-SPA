import Search from './Search.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './Video_Detail.jsx';
import React, { Component } from 'react';
import jQuery from 'jQuery';
const API_KEY = 'AIzaSyDO7hrjbmCILD4koD94p6USN2JhaS7HIUY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVid: null,term:'surfboard' };
        this.updateSelectedVid = this.updateSelectedVid.bind(this);
        this.onChange = this.onChange.bind(this);
        this.loaddata = this.loaddata.bind(this);

        this.loaddata();
    }

    onChange(term){
        this.setState({term:term},()=>{
            this.loaddata();
        })
    }

    loaddata(){
        let self= this;
        let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + API_KEY + '&q='+this.state.term+'&type=video';
        jQuery.ajax({
            type: 'GET',
            url: url,
            success: function (data) {
                self.setState({ videos: data.items, selectedVid: data.items[0] })
            }
        })
    }

    updateSelectedVid(index) {
        let vid = this.state.videos;
        this.setState({ selectedVid: vid[index] });
    }

    render() {
        return (
            <div>
                <Search onChange={this.onChange}/>
                <VideoDetail vidDtl={this.state.selectedVid} />
                <VideoList videos={this.state.videos} updateSelectedVideo={this.updateSelectedVid} />
            </div>
        )
    }
}

export default App;