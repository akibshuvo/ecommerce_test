
import React from 'react'

const Catagories = async ({params}) => {
  let slugData = params.slug
  const data = await fetch(`http://localhost:8000/api/v1/product/singlecatagory?slug=${slugData}`).then((res) =>
    res.json()
  )

  

  return (
    <>
      {data.map((item,index)=>(
     
        <li key={index}>{item.productname}</li>
        
      ))}
    </>
  )
}

export default Catagories