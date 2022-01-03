import React from 'react';
import Shop from './Shop';
import Style from './home.module.css'
import slide2 from './image/slide2.jpg';
import slide1 from './image/slide6.jpg'
import slide3 from './image/slide3.jpg'
import { Carousel , CarouselItem  } from 'react-bootstrap';


const Home = () => {

      return (
            <div >
  <Carousel style={{margin: "0" , padding:"0" , height: '80vh' }}>
  <CarouselItem interval={1000} >
    <img
      className="d-block w-80"
      src={slide2}
      alt="First slide"
      style={{width:'100%' , height:'80vh'}}
    />
    
  </CarouselItem>
  <CarouselItem interval={500}>
    <img
      className="d-block w-80"
      src={slide1}
      alt="Second slide"
      style={{width:'100%' , height:'80vh'}}
    />
 
  </CarouselItem>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-80"
      src={slide3}
      alt="Third slide"
      style={{width:'100%' , height:'80vh'}}
    />
  
  </Carousel.Item>
</Carousel>
              <p className={Style.seProducts} >Selected products</p>
            <div className={Style.seMenu}  >
              <li>
                <ui>Mobile</ui>
                </li>
                <li >
                <ui>Tablet</ui>
                </li>
                <li >
                <ui>Suggestions</ui>
                </li>
            </div>
            <Shop/>
            </div>

       
    );
                
      
};

export default Home;