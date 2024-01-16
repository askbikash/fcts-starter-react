import React from 'react'
import Header from './Components/Header'
import MainHeader from './Components/MainHeader'
import ContactPageSection from './Components/ContactPageSection'
import Footer from './Components/Footer'
import BreadcrumpContactUs from './Components/BreadcrumpContactUs'

const contactus = () => {
    return (
        <div>
            <Header />
            <MainHeader />
            <BreadcrumpContactUs />
            <div className="py-4">
                <ContactPageSection />
            </div>
            <Footer />
        </div>
    )
}

export default contactus