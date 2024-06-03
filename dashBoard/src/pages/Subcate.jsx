import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input,Select,Space  } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"




const Subcate = () => {

    let [list,setlist] = useState([])
    let [catid,setcatId] = useState("")

    
    let userId = useSelector(state => state.currentUser.value)
    // console.log(userId.ownerId)

    const onChange = (value) => {
      console.log(`selected ${value}`);
      setcatId(value)
    };
    const onSearch = (value) => {
      console.log('search:', value);
    };
    
    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    
    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/product/createsubproduct",{
            productname:values.productname,
            ownerId:userId.ownerId,
            cateId:catid,
          
        })

        console.log(data)

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      useEffect(()=>{
         async function alldata(){
            let alldata =await axios.get("http://localhost:8000/api/v1/product/allCatagry")
            console.log(alldata.data,"aaaaaaaaa")

            let arr = []

            alldata.data.map(item=>{
                arr.push({
                    value: item._id,
                    label: item.productname,
                })
               
            })

            setlist(arr)
         }
         alldata()
      },[])



  return (
    <>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="SubCatagory add"
      name="productname"
      rules={[
        {
          required: true,
          message: 'Please input your Product!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >

<Select
    showSearch
    placeholder="Select a person"
    style={{
      width: 150,
    }}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={list}
  /> <br/>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

  </>
    
  )
}

export default Subcate