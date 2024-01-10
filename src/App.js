import AboutUs from './AboutUs';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
