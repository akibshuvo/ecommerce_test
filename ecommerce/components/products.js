import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SinglePro from './singlePro';


const Products =async () => {
    const data = await fetch('http://localhost:8000/api/v1/product/allproducts').then((res) =>
        // { cache: 'force-cache' }
          res.json()
        )
    
        console.log(data, 'pppppppp')
  return (
   

    <>
     <Container>
      <Row className='justify-center gap-y-8'>
{data.map(item=>(
  <Col xs lg="3">
          <SinglePro item={item}/>
        </Col>
))}
        
       
        
      </Row>
    </Container>
    </>
  )
}

export default Products