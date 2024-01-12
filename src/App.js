import AboutUs from './AboutUs';
import './App.css';
import ContactUs from './ContactUs';
import Home from './Home';
import Services from './Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
