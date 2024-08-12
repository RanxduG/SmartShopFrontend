import React, { useEffect, useState } from 'react';
import './WelcomeBanner.css';
import { Link } from 'react-router-dom';

import image1 from '../Assets/Smart-Shopping-Assistant-1.jpg';
import image2 from '../Assets/Smart-Shopping-Assistant-2.jpg';
import image3 from '../Assets/Smart-Shopping-Assistant-3.jpg';

const slides = [image1, image2, image3];

const WelcomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='welcomebanner'>
      
      <div className='slideshow' style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
      <div className='welcome-message'>
        <h1>Welcome to Smart Shopping Assistant</h1>
        <div>
          <p>Please login to continue. <button><Link to='/loginsignup/login'>Login</Link></button></p>
        </div>
      </div>
        <div className='dots'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? 'dot active' : 'dot'}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;

