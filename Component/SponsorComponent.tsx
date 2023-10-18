import React from 'react'
import libpay from '../images/libpay.png'
import win from '../images/win.png'
import whis from '../images/whis.png'
import liberty from '../images/liberty.png'
import pay from '../images/pay.png'
import viz from '../images/viz.png'
import vert from '../images/vert.png'
import hori from '../images/hori.png'

function SponsorComponent() {
  return (
    <div>
      <div className="sponsor-wrapper p-16">
        <div className="sponsor-container flex flex-col text-center items-center">
            <div className="sponsor-header">
                <h1 className = 'text-3xl text-white pb-4'>
                    Partners and Sponsors
                </h1>
            </div>
            <div className = 'w-5/12 sponsor-gen-text'>
                <p className = 'text-white text-center'>
                  Getlinked Hackathon 1.0 is honored to have the following major 
                  companies as its partners and sponsors
                </p>
            </div>
            <div className="sponsors-widget-wrapper p-16">
                <div className="sponsors-widget-container grid gap-16 grid-cols-3 items-center">
                    <div className="vert">
                        <img src= {vert} alt="" />
                    </div>
                    <div className="hori w-fit">
                        <img src={hori} alt="" />
                    </div>
                    <div className="vert1">
                        <img src= {vert} alt="" />
                    </div>
                    <div className="hori2 w-fit">
                        <img src={hori} alt="" />
                    </div>
                    <div className="vert2">
                        <img src= {vert} alt="" />
                    </div>
                    <div className="hori3 w-fit">
                        <img src= {hori} alt="" />
                    </div>
                    <div className="vert3">
                        <img src= {vert} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {liberty} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {libpay} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {win} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {whis} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {pay} alt="" />
                    </div>
                    <div className="sponsors-widget">
                        <img src= {viz} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorComponent
