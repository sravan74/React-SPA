import React from 'react';
import Video from './Video.jsx'

const VideoList = (props) => {
     let content = props.videos.map((v,i)=>{
         return <Video key={v.etag} index={i} vid={v} updateSelectedVideo={props.updateSelectedVideo}/>
     })
    
    return (
        <div className='col-md-4'>
            <ul className='list-group'>
                {content}
            </ul>
        </div>

    )
}

export default VideoList;