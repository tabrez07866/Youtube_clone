import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from "./VideoConatiner"

const MainConatiner = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainConatiner