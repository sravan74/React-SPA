import React, { Component } from 'react';

class Video extends Component{
    constructor(props){
        super(props);
    }

    
    render(){
        let imageUrl = this.props.vid.snippet.thumbnails.default.url;
        let props = this.props;
        return (
             <li className="list-group-item" onClick={()=>props.updateSelectedVideo(props.index)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img src={imageUrl} className="media-object" />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.props.vid.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Video;