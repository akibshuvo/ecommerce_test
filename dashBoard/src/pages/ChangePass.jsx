import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ChangePass = () => {
  let param = useParams()
  let navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post(" http://localhost:8000/api/v1/auth/changepass",
        {
          password: values.password,
          token: param.token
          
        }
        )

        navigate("/login")

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
      label="password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your new password!',
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

export default ChangePass