import React from 'react'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'
import Component1 from './Component1'
import GuideComponent from './GuideComponent'
import AttrComponent from './AttrComponent'
import InquiryComponent from './InquiryComponent'
import TimeComponent from './TimeComponent'
import RewardComponent from './RewardComponent'
import SponsorComponent from './SponsorComponent'
import NonResponsive from './NonResponsive'
import PrivacyComponent from './PrivacyComponent'
import '../App.css'

function MainComponent() {
  return (
    <div>
      <div className = 'maincomponent h-fit pt-8'>
        {/* <div className="radial">   
        </div>
        <div className="radial2">
        </div> */}
        {/* <div className="radial3">
        </div>
        <div className = 'radial4'>
        </div>
        <div className="radial5">
        </div>
        <div className="radial6">
        </div>
        <div className="radial7">
        </div> */}
        <NavBar/>
        <MainContent/>
        <Component1/>
        <GuideComponent/>
        <AttrComponent/>
        <InquiryComponent/>
        <TimeComponent/>
        <RewardComponent/>
        <SponsorComponent/>
        <PrivacyComponent/>
        <Footer/>
      </div>
      {/* <div className = 'non-responsive'>
          <NonResponsive/>
      </div> */}
    </div>
  )
}

export default MainComponent
