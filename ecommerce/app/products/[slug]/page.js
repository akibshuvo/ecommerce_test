import React from 'react'

const Products = ({params}) => {

    console.log(params)
  return (
    <div>{params.slug}</div>
  )
}

export default Products