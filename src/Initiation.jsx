import { useState } from 'react';
import { useEffect } from 'react';
import {Route, useNavigate} from 'react-router-dom';
import typewriter from './assets/inquiry.wav';
import knock from './assets/invocation.mp3';
import '/public/styles/Initiation.css';

function Initiation() {
  const navigate = useNavigate();
  const inquiry = new Audio(typewriter);
  const invocation = new Audio(knock)
  inquiry.playbackRate=0.85;
  

  function pause(echo) {
    echo.pause();
  }

  function play(echo) {
    echo.play();
  }

  useEffect(()=> {
    inquiry.play();
    
    setTimeout(function(){
      pause(inquiry)
    }, 4800);
    setTimeout(function(){
      play(inquiry)
    }, 8000);
    setTimeout(function(){
      pause(inquiry)
    }, 8700);
    setTimeout(function(){
      play(inquiry)
    }, 13800);
    setTimeout(function(){
      pause(inquiry)
    }, 17000);
    setTimeout(function(){
      play(invocation)
    }, 20000);
    setTimeout(function(){
      navigate('/incantation');
    }, 30000);
  },[])
  

  
  


  return (
    <>
      <div id="container">
        <h1 id="question1">Did you hear that?</h1>
        <h1 id="question2">No?</h1>
        <h1 id="question3">Listen closely.</h1>
      </div>
    </>
  )
}

export default Initiation;