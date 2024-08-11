import { useState } from 'react';
import { useEffect } from 'react';
import {Outlet, Route, useNavigate} from 'react-router-dom';
import '/public/styles/App.css';


  
function Initialization() {
  const navigate = useNavigate();

  const initiate = () => {
    let page = document.querySelector("#page");
    page.requestFullscreen();
    navigate('/initiation');
}
  

  
  


  return (
    <div id="page">
      <button onClick={initiate}></button>
    </div>
  )
}

export default Initialization;
