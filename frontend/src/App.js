import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Navbar2 from './components/Navbar2/Navbar2';
import Carousel from "./components/Swiper/Swiper";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Carousel />
    </div>
  );
}

export default App;
