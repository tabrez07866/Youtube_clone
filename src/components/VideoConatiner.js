import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/contants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoConatiner = () => {

  const [videos , setVideos]=useState([]);

 useEffect(()=>{
  getVideos();
 },[]);

 const getVideos=async()=>{
  const data=await fetch(YOUTUBE_VIDEOS_API);
  const json=await data?.json();
  setVideos(json?.items)
 }

  return (
    <div className='justify-center items-center flex flex-wrap'>
      {videos.map(video=>(
     <Link key={video.id} to={"/watch?v="+ video?.id}> <VideoCard key={video.id} info={video}/>  </Link> ))}
      </div>
  )
}

export default VideoConatiner