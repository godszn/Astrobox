import React from 'react'
import quest from '../images/quest.png'
import add from '../images/add.png'
import mark from "../images/mark.png";

function InquiryComponent() {
  return (
    <div>
      <div className="inquiry-wrapper">
        <div className="inquiry-container">
           <div className="inquiry-text-wrapper text-white">
             <div className="inquiry-header">
                <h1 className = 'text-3xl'>Frequently Asked</h1>
                <h1 className = 'pink text-3xl'>Questions</h1>
             </div>
             <div className = 'inquiry-info'>
                <p className = 'pt-4'>We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0
                </p>
             </div>
             <div className="inquiry-faqs-container pt-16">
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                                Can I work on a project I started before the hackathon?
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                               What happens if I need help during the hackathon?
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                               What happens if I don't have an idea for a project?
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                              Can I join a team or do I have to come with one?
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                             What happens after the hackathon ends
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
                <div className="faqs flex items-center pt-4">
                   <div className = 'pb-4 flex items-center flex w-full justify-between'>
                        <div className = 'quest'>
                            <p>
                              Can I work on a project I started before the hackathon?
                            </p>
                        </div>
                        <div className = 'pl-4 add'>
                            <img src= {add} alt="" />
                        </div>
                   </div>
                </div>
             </div>
           </div>
           <div className="inquiry-widget-wrapper">
                <div className = 'mark'>
                    <img src= {mark} alt="" />
                </div>
                <div className = 'mark1'>
                    <img src= {mark} alt="" />
                </div>
                <div className = 'mark2'>
                    <img src= {mark} alt="" />
                </div>
                <img src= {quest} alt="" />
            </div> 
        </div>
      </div>
    </div>
  )
}

export default InquiryComponent
