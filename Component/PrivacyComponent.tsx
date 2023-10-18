import React from 'react'
import green from '../images/green.png'
import padlock from '../images/padlock.png'
import authpad from  '../images/authpad.png'

function PrivacyComponent() {
  return (
    <div>
      <div className="privacy-wrapper  p-16">
        <div className="privacy-container flex">
           <div className="privacy-text-wrapper m-12 w-1/2">
                <div className="privacy-header text-white pb-4">
                    <h1 className = 'text-3xl'>
                        Privacy Policy and
                    </h1>
                    <h1 className = 'pink text-3xl pb-4'>
                        Terms
                    </h1>
                    <p className = 'pb-4'>
                     Last updated on September 12, 2023
                    </p>
                    <div className = 'pb-4 w-4/5 fit'>
                        <p>
                            Below are our privacy & policy, which outline a lot of goodies. 
                          it’s our aim to always take of our participant
                        </p>
                    </div>
                </div>
                <div className = 'privacy-text-container text-white pt-4'>
                   <div className = 'privacy-text'>
                        <p>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                        </p>
                   </div>
                   <div>
                      <div className = 'pb-4'>
                        <h3 className = 'pink font-semibold'>
                          Licensing Policy
                        </h3>
                        <h3>
                          Here are terms of our Standard License:
                        </h3>
                      </div>
                      <div className =' flex pb-4'>
                        <div className ='pr-3'>
                            <img src= {green} alt="" />
                        </div>
                        <div className = 'w-5/6'>
                            <p>
                              The Standard License grants you a non-exclusive right to
                              navigate and register for our event
                            </p>
                        </div>
                      </div>
                      <div className = 'flex pb-4'>
                        <div className = 'pr-3'>
                            <img src= {green} alt="" />
                        </div>
                        <div className = 'w-5/6' >
                            <p>
                              You are licensed to use the item available at any free source
                              sites, for your project developement
                            </p>
                        </div>
                      </div>
                   </div>
                </div>
           </div>
           <div className="privacy-widget-wrapper w-1/2">
             <div className="privacy-widget">
                <div>
                    <img src= {authpad} alt="" />
                </div>
                <div className = 'padlock-widget'>
                    <img src= {padlock} alt="" />
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyComponent
