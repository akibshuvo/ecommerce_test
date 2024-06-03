import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'age',
      key: 'age',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>{record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const catelist = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
  
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
     
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      
    },
  ];
  const ViewCate = () =>{

    let [catelist, setcatelist] = useState("")
    
    useEffect(()=>{
        async function alldata(){
           let alldata =await axios.get("http://localhost:8000/api/v1/product/allCatagry")
           console.log(alldata.data,"aaaaaaaaa")

           let arr = []

           alldata.data.map(item=>{
               arr.push({
                age: item._id,
                name: item.productname,
               })
           })

           setcatelist(arr)
        }
        alldata()
     },[])

  return(
    <Table columns={columns} dataSource={catelist} />

  )
}

  export default ViewCate;