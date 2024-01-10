import React from 'react'
import Header from './Components/Header'
import MainHeader from './Components/MainHeader'
import Breadcrump from './Components/Breadcrump'
import About from './Components/About'
import Stepper from './Components/Stepper'
import OurTeam from './Components/OurTeam'
import LeftRightSection from './Components/LeftRightSection'
import Footer from './Components/Footer'

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <Header />
            <MainHeader />
            <Breadcrump />
            <div className='pt-4 pb-3' >
                <About />
            </div>
            <Stepper />
            <OurTeam />
            <LeftRightSection/>
            <Footer/>
        </div>
    )
}

export default AboutUs