import React from 'react'

const VideoCard = ({info}) => {
    
    // const {snippet,statistics}=info;
    // const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg ' src={info?.snippet?.thumbnails?.medium?.url} alt='thumb'/>
        <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard