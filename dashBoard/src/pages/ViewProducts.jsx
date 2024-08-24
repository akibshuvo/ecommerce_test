import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Serial',
    dataIndex: 'serial',
    key: 'serial',
    render: (key,index,num) => <a>{num+1}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <img style={{width:'50px'}} src={`http://localhost:8000${_.avatar}`} />
       
        
      </Space>
    ),
  },
  {
    title: 'Products Name',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sell Price',
    dataIndex: 'sellPrice',
    key: 'sellPrice',  
  },
  {
    title: 'Regular Price',
    dataIndex: 'regularPrice',
    key: 'regularPrice',
  },
  
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">     
        <a>Delete</a>
      </Space>
    ),
  },
];


const ViewProducts = () => {

  let [productsValue, setProductsValue] = useState([])


 useEffect(()=>{
  async function productsData (){
       let data =await axios.get('http://localhost:8000/api/v1/product/allproducts')

       let arr = []
       data.data.map((item,index)=>(
        // console.log(item)
        arr.push(item)

       ))

       setProductsValue(arr)
  }
  productsData()
 },[])



  return (
    <div>
      <Table columns={columns} dataSource={productsValue}/>

     
    </div>
  )
}

export default ViewProducts