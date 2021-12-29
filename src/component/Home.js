import React from 'react';
import Footer from './home/Footer';
import slide2 from './image/slide2.jpg';
import slide1 from './image/slide1.jpg'
import slide3 from './image/slide3.jpg'
import { Carousel , CarouselItem  } from 'react-bootstrap';


const Home = () => {

      return (
            <div >
  <Carousel style={{margin: "0" , padding:"0"}}>
  <CarouselItem interval={1000} >
    <img
      className="d-block w-100"
      src={slide2}
      alt="First slide"
    />
  
  </CarouselItem>
  <CarouselItem interval={500}>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Second slide"
    />
 
  </CarouselItem>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
           <Footer/>
            </div>

       
    );
                
      
};

export default Home;