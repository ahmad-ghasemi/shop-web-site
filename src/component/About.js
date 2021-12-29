import React from 'react';
import about from './image/about.gif'
import Footer from './home/Footer';

const About = () => {
      return (
            <div >
            <img style={{width: "100%"}} src={about}  alt='image' />
            <p>salam</p>
            <Footer/>
            </div>
      );
};

export default About;