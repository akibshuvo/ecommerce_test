"use client"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'


const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
           <Image
                src='http://localhost:8000/uploads/1724426413516-195837298-22c3d00a-930c-4217-86ae-d98f05863e8d~2.jpg'
                alt="Picture of the author"
                width={720}
                height={500}
                />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
                src='http://localhost:8000/uploads/1724426413516-195837298-22c3d00a-930c-4217-86ae-d98f05863e8d~2.jpg'
                alt="Picture of the author"
                width={720}
                height={500}
                />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
                src='http://localhost:8000/uploads/1724426413516-195837298-22c3d00a-930c-4217-86ae-d98f05863e8d~2.jpg'
                alt="Picture of the author"
                width={720}
                height={500}
                
                />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner