import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import {Route, useNavigate} from 'react-router-dom';

import him from './assets/him.png';
import him2 from './assets/himv2.png';
import encounterVid from './assets/encounter.mp4';
import footsteps from './assets/bumpintheNight.mp3';
import breath from './assets/presence.mp3';
import rumble from './assets/immolation.mp3';
import intro from './assets/introductionv2.wav';
import bioKinetics from './assets/Biokinetics2.mp3';
import '/public/styles/Isolation.css';


function Isolation() {
    const encounter = encounterVid;
    const bump = new Audio(footsteps);
    const videoRef = useRef(null);
    const guest = new Audio(breath);
    const immolation = new Audio(rumble);
    const introduction = new Audio(intro);
    const run = new Audio(bioKinetics);
    immolation.volume = 0.2;
    console.log(videoRef.current);
    
    useEffect(()=> {
        videoRef.current.addEventListener("canplay", function() {
            setTimeout(function() {
                videoRef.current.play();
            }, 15000);
            setTimeout(function() {
                immolation.play();
            }, 5000);
            setTimeout(function() {
                bump.play();
            }, 24000);
            
            setTimeout(function() {
                guest.play();
            }, 30000);
        })
        setTimeout(function() {
            introduction.play();
        }, 50000);

        setTimeout(function() {
            run.play();
        }, 52000);
    },[])

return (
    <div id="page2">
    <video ref={videoRef} id="video">
        <source src={encounter} type="video/mp4"></source>
    </video>
    <img src={him2} alt="" />
    {/*<div id="container">
        <h1 id="question">What do you see?</h1>
    </div>*/}
    </div>
)
}
export default Isolation;