import { useState } from 'react';
import { useEffect } from 'react';
import {Outlet, Route, useNavigate} from 'react-router-dom';
import '/public/styles/App.css';
import '/public/styles/Initialization.css';

import eye from './assets/eye.jpg';
  
function Initialization() {
  const navigate = useNavigate();

  const initiate = () => {
    let page = document.querySelector("#page");
    page.requestFullscreen();
    navigate('/initiation');
}
  

  
  


  return (
    <div id="page">
      <img onClick={initiate} id="eye" src={eye}/>
    </div>
  )
}

export default Initialization;
