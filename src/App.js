import AboutUs from './about-us';
import './App.css';
import ContactUs from './contact-us';
import Home from './Home';
import Services from './services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
