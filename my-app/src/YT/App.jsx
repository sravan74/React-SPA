import Search from './search.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './Video_Detail.jsx';
import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyDO7hrjbmCILD4koD94p6USN2JhaS7HIUY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVid: null, term: 'nirvana' };
        this.updateSelectedVid = this.updateSelectedVid.bind(this);

        this.loaddata();
    }

    onChange = (term) => {
        this.setState({ term: term }, () => {
            this.loaddata();
        })
    }

    loaddata = () => {
        let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + API_KEY + '&q=' + this.state.term + '&type=video';
        axios.get(url).then((resp) => {
            const data = resp.data;
            this.setState({ videos: data.items, selectedVid: data.items[0] })
        })
    }

    updateSelectedVid(index) {
        let vid = this.state.videos;
        this.setState({ selectedVid: vid[index] });
    }

    render() {
        return (
            <div>
                <Search onChange={this.onChange} />
                <VideoDetail vidDtl={this.state.selectedVid} />
                <VideoList videos={this.state.videos} updateSelectedVideo={this.updateSelectedVid} />
            </div>
        )
    }
}

export default App;