import React ,{useState, useEffect} from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const columns = [
    {
      title: 'Sub Catagory',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'SubId',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Main Catagory',
      dataIndex: 'address',
      key: 'address',
    },
    
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a> {record.name}</a>
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
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const ViewSub = () => {
    let [catelist, setcatelist] = useState("")
    
    useEffect(()=>{
        async function alldata(){
           let alldata =await axios.get("http://localhost:8000/api/v1/product/allsubcata")
           console.log(alldata.data,"aaaaaaaaa")

           let arr = []

           alldata.data.map(item=>{
               arr.push({
                age: item._id,
                name: item.productname,
                address:item.cateId,

               })
            console.log(item)
           })

           setcatelist(arr)
        }
        alldata()
     },[])

  return (
    <Table columns={columns} dataSource={catelist} />
  )
}

export default ViewSub