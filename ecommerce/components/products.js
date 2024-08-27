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
    // data.map(item=>(
    //     <div className='w-96'>
    //         <div>
    //         <Image
    //             src={`http://localhost:8000${item.avatar}`}
    //             alt="Picture of the author"
    //             width={200}
    //             height={200}
    //             />
    //             <p>{item.productName}</p>
    //             <div className='flex gap-x-4 ml-2'>
    //                <p>Price: {item.sellPrice}</p>
    //                 <del>{item.regularPrice}</del>
                    
    //             </div>
    //         </div>
    //     </div>
    // ))

    <>
     <Container>
      <Row className='justify-md-center '>
        <Col xs lg="4">

        {data.map((item,index=>(
          <li key={index}>{item.productName}</li>

        )))}
        <SinglePro/>
        </Col>
        
      </Row>
    </Container>
    </>
  )
}

export default Products