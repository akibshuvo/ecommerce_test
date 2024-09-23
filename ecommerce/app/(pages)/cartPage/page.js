"use client"

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const CartPage = () => {
  let [cartData, setCardData] = useState([])
  let totalPrice = 0


  useEffect(()=>{
   async function datas(){ 
    const data = await fetch('http://localhost:8000/api/v1/product/allCart').then((res) =>
      res.json()
    )
    setCardData(data)
  }

  datas()
},[])

// function price(){
  cartData.map(item=>{
    totalPrice += item.productID.sellPrice*item.quantity

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice+(totalPrice/15)+60))
  })
// }

  let handleIncrese = async (id,type)=>{
    console.log(cartData,"a")

    let updateData = cartData.map(item =>(
      item.productID._id == id
      ? {...item, quantity:item.quantity + (type == "incre"? 1: -1)} 
      : item
    ))

    setCardData(updateData)
  

    console.log(id)
    const rawResponse = await fetch(`http://localhost:8000/api/v1/product/cartPage?type=${type}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productID:id,
        })
      });
      const content = await rawResponse.json();
      console.log(content)
}




  return (
    <Container>
<Table striped bordered hover>
    <thead>
      <tr>
        <th>Images</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total Price</th>
      </tr>
    </thead>

    {cartData.map((item,index)=>(
    <tbody>
      <tr>
        <td>
            <Image
                src={`http://localhost:8000${item.productID.avatar[0]}`}
                alt="Picture of the author"
                width={70}
                height={70}
                />
        </td>
        <td key={index}>{item.productID.productName}</td> 
        <td> 
            <button onClick={()=>handleIncrese(item.productID._id,"decre")}>-</button>    
                    {item.quantity}
          <button onClick={()=>handleIncrese(item.productID._id,"incre")}>+</button>
          </td>
        <td>{item.productID.sellPrice}</td>
        <td>{item.productID.sellPrice*item.quantity}</td>
      </tr>
 
    </tbody>
  ))}


  <thead>
      <tr>
        <th>total</th>
        <th>tax</th>
        <th>delivary</th>
        <th>Subtotal</th>
       
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{totalPrice}</td> 
        <td>{totalPrice/15}</td>
        <td>60</td>
        <td>{totalPrice+totalPrice/15+60}</td>
      </tr>
 
    </tbody>

    <Link href="/checkout">CheckOut Here</Link>
   
  </Table>
  </Container>
    
  )
}

export default CartPage