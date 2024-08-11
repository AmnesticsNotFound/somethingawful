import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import {Route, useNavigate} from 'react-router-dom';


import typewriter from './assets/inquiry.wav';
import knock from './assets/invocation.mp3';
import dungeonAir from './assets/dungeonAir.mp3';
import '/public/styles/Incantation.css';

function Incantation() {
    const navigate = useNavigate();
    const invocation = new Audio(knock);
    const aeration = new Audio(dungeonAir);
    const inquiry = new Audio(typewriter);
    const doorRef = useRef(null);

    inquiry.playbackRate= 0.80;
    aeration.volume = 0;
    invocation.play();
  
    useEffect(()=> {
        // initially sets the door to invisible because the animation takes a second to load; without this the door
        // would load in at its maximum size for a split second and then begin the doorExpand animation
        doorRef.current.classList.add("makeInvisible");
        doorRef.current.classList.add("doorExpand");
        setTimeout(function () {
            doorRef.current.classList.remove("makeInvisible")
        }, 4600)
        // adds the click event listener and glow class, the latter makes the foor glow, signifying its interactibility
        //useRef references to elements that are going to be used on mount need to be in useEffect or else they will appear null.
        // This is because they are loaded before the document.
        setTimeout(function () {
            doorRef.current.classList.add("glow")
            doorRef.current.addEventListener("click", open)
        }, 33000)

        setTimeout(function () {
            inquiry.play();
        }, 40000);
    
        setTimeout(function () {
            inquiry.pause();
        }, 46000);
        
        setTimeout(function () {
            aeration.play();
        }, 4000);
    //increase the volume of the aeration file over time for maximum spooks
        let timer = 100;
        setTimeout(function() {
            for (let i = 0; i < 99; ++i) {
                setTimeout(function () {
                    aeration.volume = aeration.volume + 0.01;
                    
                }, timer);
                timer = timer + 300;
                
            }
    
        }, 4000)
        
        
    },[])

    // click event for the door, begins transition animation and redirects to the next page
    function open() {
        //let door = doorRef;
        let body = document.querySelector("body");

        
        //doorRef.current.style.animation = 'none';
        //doorRef.current.offsetHeight;
        doorRef.current.classList.add("doorOpen");
        //body.classList.add("whiteout");
        setTimeout(function () {
            navigate('/isolation');
            aeration.pause();
        }, 15000)
        
        
    }

    
//alternative way of doing the above. Abandoned due to verbosity required to achieve the same gradual increase in volume
    /*setTimeout(function () {
        aeration.volume = 0.2;
    }, 6000);
    setTimeout(function () {
        aeration.volume = 0.4;
    }, 8000);
    setTimeout(function () {
        aeration.volume = 0.8;
    }, 10000);
    setTimeout(function () {
        aeration.volume = 1.0;
    }, 12000);*/
    

    


return (
    <div id="page">
        <div id="door" ref={doorRef}>
            <div id="knobBase">
                <div id="knob"></div>

            </div>
        </div>
        <div id="container">
            <h1 id="line1">You have company.</h1>
            <h1 id="line2">Its rude to keep them waiting.</h1>
      </div>
    </div>

)
}
export default Incantation;