import React from 'react'
import bloodborne from './bloodborne.jpg';
import gow from './gow.jpg';
import hgl from './hgl.jpg';
import needforspeed from './needforspeed.jpg';
import nier from './nier.jpg';
import sekiro from './sekiro.jpg';
import tsushima from './tsushima.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-slideshow-image/dist/styles.css';
import { Navbar } from '../navbar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles.css';

export default function Kezdolap() {



    const images = [
        bloodborne,
        gow,
        hgl,
        needforspeed,
        nier,
        sekiro,
        tsushima
    ];

    return (
        <>
            <Navbar/>
            <div>
        <Carousel className="slider-container" showIndicators={false} showStatus={false} emulateTouch showThumbs={false} autoPlay interval="3000" transitionTime="2000" width="60%" showArrows={false} infiniteLoop dynamicHeight>
          <img src={bloodborne} alt="" />
          <img src={nier} alt="" />
          <img src={tsushima} alt="" />
          <img src={hgl} alt="" />
          <img src={gow} alt="" />
          <img src={sekiro} alt="" />
        </Carousel>
      </div>
       
        </>
    )
    
};

   