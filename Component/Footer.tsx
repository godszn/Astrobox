import React from 'react'
import navbrand from '../images/navbrand.png'
import face from '../images/face.png'
import x from '../images/x.png'
import insta from '../images/insta.png'
import link from '../images/link.png'
import phone from '../images/phone.png'
import loc from '../images/loc.png'

function Footer() {
  return (
    <div> 
        <div className="footer-wrapper flex flex-col p-16 pb-0 text-white">
           <div className="footer-container pl-6 flex justify-evenly">
              <div className = 'w-1/2 fit'>
                <div className="footer-logo pb-4">
                  <img className = 'w-1/4' src= {navbrand} alt="" />
                </div>
                <div className = 'pb-6'>
                  <p className = 'text-sm w-10/12 fit'>
                    Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology
                  </p>
                </div>
                <div className = 'pt-6 flex text-sm termz'>
                   <p className = 'pr-2 terms'>Terms of Use</p>
                   <p className = 'pl-2'>Privacy Policy</p>
                </div>
              </div>
              <div className = 'footer-linkz'>
                <h1 className = 'pb-2 pink'>
                  Useful Links
                </h1>
                 <div>
                    <ul className = 'footer-links'>
                      <li>
                        Overview
                      </li>
                      <li>
                        Timeline
                      </li>
                      <li>
                        FAQs
                      </li>
                      <li>
                        Register
                      </li>
                    </ul>
                 </div>
                <div className = 'flex'>
                  <div>
                    <h1 className = 'pink'>Follow us</h1>
                  </div>
                  <div className = 'flex items-center footer-social'>
                    <img src= {insta} alt="" />
                    <img src= {x} alt="" />
                    <img src= {face} alt="" />
                    <img src= {link} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className = 'pb-4'>
                  <h1 className = 'pink pr-4'>Contact Us</h1>
                </div>
                <div className = 'flex items-center pb-2'>
                  <img src= {phone}/>
                  <p className = 'ml-2 text-sm font-semibold'>+234 813 922 8111</p>
                </div>
                <div className = 'items-baseline flex font-semibold'>
                    <img  src={loc} />
                    <p className = 'text-sm pl-2 w-2/5'>
                      27,Alara Street
                      Yaba 100012
                      Lagos State
                    </p>
                </div>
              </div>
           </div>
          <div className = 'justify-center flex m-6 mt-10 font-semibold text-sm'>
             <p>
               All rights reserved. © getlinked Ltd.
             </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
