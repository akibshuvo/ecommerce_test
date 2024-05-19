import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Reg = () => {
  let navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post("http://localhost:8000/api/v1/auth/reg",
    {
      name: values.username,
      email: values.email,
      password: values.password
    },{
      headers:{
        Authorization: "thename"
      }
    }
    
    )
    navigate(`/otpverification/${values.email}`)

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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    
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
      <Link to="/login">Login</Link>
    </Form.Item>
    
    
  </Form>

  )
}

export default Reg