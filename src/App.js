import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MainHeader from './Components/MainHeader';
import Service from './Components/Service';
import LeftRightSection from './Components/LeftRightSection';
import Testimonial from './Components/Testimonial';
import Hero2 from './Components/Hero2';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeader/>
      <Hero/>
      <Service/>
      <LeftRightSection/>
      <Testimonial/>
      <Hero2/>
    </div>
  );
}

export default App;
