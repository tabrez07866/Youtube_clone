import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  

  if(!isMenuOpen) 
  
  return <>
      <div className='p-5 shadow-lg w-24 '>
         
         <ul>
             <li>
                 <Link to="/"> 🏠</Link>
             </li>
             <li> 📴 </li>
             <li> 🎥 </li>
             <li> 📲 </li>
         </ul>
        
         <ul>
             <li> 🎶 </li>
             <li> 🏆 </li>
             <li> 🖥️ </li>
             <li> 📀 </li>
         </ul>
        
         <ul>
             <li> 🕸️ </li>
             <li> 🗯️ </li>
             <li> 🕮 </li>
             <li> 🖹 </li>
         </ul>
        
     </div> 
      
  
  </>;
   
  return (
    <div className='p-5 shadow-lg w-48'>
         
        <ul>
            <li>
                <Link to="/"> 🏠 Home </Link>
            </li>
            <li> 📴 Shorts</li>
            <li> 🎥 Video</li>
            <li> 📲 Live</li>
        </ul>
        <h1 className='font-bold pt-5 '>Subscription</h1>
        <ul>
            <li>🎶 Music</li>
            <li>🏆 Sports</li>
            <li>🖥️ Gaming</li>
            <li>📀 Movies</li>
        </ul>
        <h1 className='font-bold pt-5 '>Help</h1>
        <ul>
            <li>🕸️ setting</li>
            <li>🗯️ Report</li>
            <li>🕮 Learning</li>
            <li>🖹 Feedback</li>
        </ul>
       
    </div>
  )
}

export default Sidebar