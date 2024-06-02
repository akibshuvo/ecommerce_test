import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"


const AdCategory = () => {
    let userId = useSelector(state => state.currentUser.value)
    // console.log(userId.ownerId)
    
    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/product/createproduct",{
            productname:values.productname,
            ownerId:userId.ownerId
        })

        console.log(data)

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
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
      label="AdProduct"
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AdCategory