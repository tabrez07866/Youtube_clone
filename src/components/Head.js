import React, { useEffect, useState } from "react";
import icon from "./download.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => 
    

    
    getSearchSuggetions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestion(json[1])
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className="grid grid-flow-col p-5 m-2    
      shadow-lg"
    >
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-810x810.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-3"
            src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 ">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full py-2 px-5 bg-gray-200 ">
            🔍
          </button>
        </div>
        {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded border border-gray-100 ">
          <ul>
            {

     suggestion.map((s)=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100 ">🔍 {s}</li>
            )
            }
            
          </ul>
        </div>)}
      </div>
      <div className="col-sapn-1">
        <img className="h-8" src={icon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
