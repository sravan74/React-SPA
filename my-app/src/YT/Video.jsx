import React, { Component } from 'react';

const Video = props => {
    const imageUrl = props.vid.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => props.updateSelectedVideo(props.index)}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {props.vid.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Video;