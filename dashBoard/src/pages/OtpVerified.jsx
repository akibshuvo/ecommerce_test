import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';


const OtpVerified = () => {
    let param = useParams()
    let navigate = useNavigate


    console.log(param)


    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post("http://localhost:8000/api/v1/auth/otpverification",
        {
          email: param.email,
          otp: values.otp
        }
        
        )

        console.log(values,"aaa")
        navigate("/home")
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
      label="OTP Code"
      name="otp"
      rules={[
        {
          required: true,
          message: 'Please input your otp!',
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

export default OtpVerified