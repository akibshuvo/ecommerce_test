'use client'

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const SinglePro = (item) => {

  const handleAddToCart = async ()=>{

    console.log(item.item, "add")
    // const rawResponse = await fetch('http://localhost:8000/api/v1/product/cartPage', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // });
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000${item.item.avatar[0]}`} />
      <Card.Body>
        <Link href={`/products/${item.item.slug}`}><Card.Title>{item.item.productName}</Card.Title></Link>
        <Card.Text dangerouslySetInnerHTML={{ __html: item.item.descriptions }}>
         
        </Card.Text>
        <p>{item.item.sellPrice ? <span>{item.item.sellPrice} -- <del>{item.item.regularPrice}</del></span> : <p>{item.item.sellPrice}</p>}</p>
        <Button onClick={handleAddToCart} variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  )
}

export default SinglePro