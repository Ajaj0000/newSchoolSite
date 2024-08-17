import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing/Routing';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useEffect } from 'react';


function App() {
useEffect(()=>{
  Aos.init()
},[]);
  
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
