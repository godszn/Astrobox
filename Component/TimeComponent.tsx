import React from 'react'
import No1 from '../images/No1.png'
import No2 from '../images/No2.png'
import No3 from '../images/No3.png'
import No4 from '../images/No4.png'
import No5 from '../images/No5.png'
import No6 from '../images/No6.png'

function TimeComponent() {
  return (
    <div>
      <div className="timeline-wrapper">
        <div className="timeline-container flex flex-col items-center">
            <div className="timeline-header text-white items-center">
               <h1 className = 'text-3xl text-center'>
                 Timeline   
               </h1>
            </div>
            <div>
               <p className = 'text-white text-center p-4'>
                 Lorem ipsum dolor,
                 sit amet consectetur adipisicing elit. Sed fugiat odio mollitia quod reiciendis ut 
                </p>
            </div>
            <div className="timeline-container-content grid grid-cols-2 gap-12 w-fit">
                <div className = 'pad'>
                    <div className="timeline-content flex p-4 left">
                        <div className = 'No1'>
                            <img src= {No1} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink'>
                                Hackathon Announcement
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content p-4 flex right">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>
                </div> 

              <div className = 'change'>
                <div className="timeline-content flex justify-end p-4 right">
                        <div className = 'No2'>
                            <img src= {No2} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content flex flex-row-reverse p-4 left">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink pb-4'>
                                Teams Registration begins
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register
                                </p>
                            </div>
                        </div>
                    </div>
              </div>
               <div className = 'pad'>           
                    <div className="timeline-content flex p-4 left">
                        <div className = 'No1'>
                            <img src= {No3} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink pb-4'>
                                Teams Registration ends
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                Interested Participants are no longer Allowed to
                                register
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content p-4 flex right">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className = 'change'>
                    <div className="timeline-content p-4 flex justify-end right">
                        <div className = 'No2'>
                            <img src= {No4} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content flex flex-row-reverse p-4 left">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink pb-4'>
                                Announcement of the accepted teams
                                and ideas
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                All teams whom idea has been accepted into getlinked tech
                                hackathon 1.0 2023 are formally announced
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className = 'pad'>
                    <div className="timeline-content flex p-4 left">
                        <div className = 'No1'>
                            <img src= {No5} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink pb-4'>
                                Getlinked Hackathon 1.0 Offically Begins
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                Accepted teams can now proceed to build their
                                ground breaking skill driven solutions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content p-4 flex right">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                <div className = 'change'>
                    <div className="timeline-content flex justify-end p-4 right">
                        <div className = 'No2'>
                            <img src= {No6} alt="" />
                        </div>
                        <div className="timeline-content-text text-end">
                            <div>
                                <h1 className = 'text-xl pink'>
                                November 18, 2023
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-content flex flex-row-reverse p-4 left">
                        <div className="timeline-content-text">
                            <div>
                                <h1 className = 'text-xl pink pb-4'>
                                Demo Day
                                </h1>
                            </div>
                            <div>
                                <p className = 'text-white'>
                                Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default TimeComponent
