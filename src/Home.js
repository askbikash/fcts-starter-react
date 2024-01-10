import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MainHeader from './Components/MainHeader';
import Service from './Components/Service';
import LeftRightSection from './Components/LeftRightSection';
import Testimonial from './Components/Testimonial';
import Hero2 from './Components/Hero2';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <MainHeader />
            <Hero />
            <Service />
            <LeftRightSection />
            <Testimonial />
            <Hero2 />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home