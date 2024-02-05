import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const Live = () => {

useEffect(()=>{
 
  const i=setInterval(()=>{
    
  },2000);

  return ()=>clearInterval(i);

},[])

  return (
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 '>
      <ChatMessage name="Tabrez" message="tabrez is good boy💕"/>
    </div>
  )
}

export default Live