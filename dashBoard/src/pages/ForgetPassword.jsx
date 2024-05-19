import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
       
    
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
        enter
      </Button>
     
    </Form.Item>
  </Form>
  )
}

export default ForgetPassword