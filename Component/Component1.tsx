import React from 'react'
import intro from "../images/intro.png";
import arrow from '../images/arrow.png';


function Component1() {
  return (
    <div>
      <div className="intro-wrapper">
        <div className="intro-container flex items-center">
            <div className="intro-widget">
               <img src= {intro} alt="" />
               <p>The Big Idea</p>
               <div className = 'arrow'>
                <img src= {arrow} alt="" />
               </div>
            </div>
            <div className="intro-text-wrapper">
               <div className="intro-header">
                  <h1 className = 'text-white'>
                     Introduction to getlinked
                  </h1>
                  <h1 className = 'intro-tetx pink'>
                    tech Hackathon 1.0
                  </h1>
               </div>
               <div className="intro-text text-white">
                <p>
                 Our tech hackathon is a melting pot of visionaries, and its purpose is as
                 clear as day: to shape the future. Whether you're a coding genius, a 
                 design maverick, or a concept wizard, you'll have the chance to transform 
                 your ideas into reality. Solving real-world problems, pushing the boundaries
                 of technology, and creating solutions that can change the world,
                 that's what we're all about!
                </p>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Component1
