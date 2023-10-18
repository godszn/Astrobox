import React from 'react'
import guide from '../images/guide.png'

function GuideComponent() {
  return (
    <div>
      <div className="Guide-wrapper">
        <div className="Guide-container flex items-center">
            <div className="Guide-widget">
               <img src= {guide} alt="" />
            </div>
            <div className="Guide-text-wrapper">
               <div className="Guide-header">
                  <h1 className = 'text-white'>
                     Rules and
                  </h1>
                </div>
                <div className = 'Guide-tetx'>
                  <h1>
                    Guidelines
                  </h1>
                </div>
               <div className="Guide-text text-white">
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

export default GuideComponent
