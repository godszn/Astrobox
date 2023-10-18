import React from 'react'
import vec1 from '../images/vec1.png'
import bulb from '../images/bulb.png'
import chain from '../images/chain.png'
import wuta from '../images/wuta.png'
import steeze from '../images/steeze.png'
import ball from "../images/ball.png";
import time from '../images/time.png';

function MainContent() {
  return (
    <div>
      <div className="maincontent">
          <div className="maincontent-container">
            <div className="maincontent-text-widget flex flex-col justify-end mr-24 ">
                <div className = 'mt-4 vectx-wrapper'>
                    <h1 className = 'tetx text-end'>
                        Igniting a Revolution in HR Innovation
                        <div className = 'flex justify-end vec1'>
                          <img src= {vec1} alt="" />
                        </div>
                    </h1>
                </div>
            </div>
            <div className="mainwidget-container justify-between flex">
              <div className = 'flex mainwidget-text flex-col ml-24 w-2/6'>
                <div className = 'flex bulb-text'>
                  <div className="bulb flex justify-end mr-8">
                    <img src= {bulb} alt="" />
                  </div>
                  <div className = 'emo-wrapper'>
                    <h1 className = 'text-3xl text-white font-bold'>
                      getlinked Tech
                    </h1>
                    <h2 className = 'text-white text-xl font-bold'>
                      Hackathon
                      <span className = 'text-purple-400 pl-2'>
                        1.0
                      </span>
                    </h2>
                    <div className = 'items-end flex emo'>
                      <img src= {chain} alt="" />
                      <img src= {wuta} alt="" />
                    </div>
                  </div>
                </div>
                <div className = 'w-10/12 main-paragraph-wrapper'>
                  <p className = 'text-white p-4 pl-0'>Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize
                  </p>
                </div>
                <div className="auth-wrapper2 w-fit ml-0">
                    <div className=" text-white">
                        <a>Register</a>
                    </div>
                </div>
                <div className = 'clock'>
                  <img src= {time} alt="" />
                </div>
              </div>
              <div className="maincomponent-widget1">
                <div>
                  <img src= {steeze} alt="" />
                </div>
                <div className = 'ball'>
                   <img src= {ball} alt="" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainContent
