import React from 'react'
import cup from '../images/cup.png'
import medal1 from '../images/medal1.png'
import medal2 from '../images/medal2.png'
import medal3 from '../images/medal3.png'

function RewardComponent() {
  return (
    <div>
      <div className="reward-wrapper p-16">
        <div className="reward-container flex-col flex">
             <div className="reward-wrapper-gen text-white">
                < div className = 'flex flex-col prize-gen items-end'>
                  <div className = 'text-3xl pb-4 prize-header'>
                      <h1>
                          Prizes and
                      </h1>
                      <h1 className = 'pink center'>
                          Reward
                      </h1>
                  </div>
                  <div className = 'w-9/12 prize-text'>
                      <p>
                      Highlight of the prizes or rewards for winners 
                      and for participants.
                      </p>
                  </div>
                </div>
                 <div className = 'accolade-wrapper flex'>
                    <div className="cup-widget w-3/5">
                      <img src= {cup} alt="" />
                    </div>
                    <div className="medal-container pt-16 items-center w-4/5 flex">
                        <div className="medal-wrapper h-fit flex">
                            <img src= {medal1} alt="" />
                        </div>
                        <div className="medal-wrapper flex">
                            <img src= {medal2} alt="" />
                        </div>
                        <div className="medal-wrapper h-fit flex">
                            <img src= {medal3} alt="" />
                        </div>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default RewardComponent
