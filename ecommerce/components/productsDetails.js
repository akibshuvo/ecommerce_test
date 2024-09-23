'use client'



import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ProductsDetails = ({images}) => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  return (
     <div className="slider-container">
     
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        {images.map(item=>(
            <div>
            <Image
                src={`http://localhost:8000${item}`}
                alt="Picture of the author"
                width={500}
                height={500}
                />
          </div>
        ))}
      
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {images.map(item=>(
            <div>
            <Image
                src={`http://localhost:8000${item}`}
                alt="Picture of the author"
                width={200}
                height={200}
                />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductsDetails