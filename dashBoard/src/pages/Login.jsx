import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Password from 'antd/es/input/Password';
import { activeUser } from '../slices/userSlices';
import { useDispatch,useSelector } from 'react-redux';


const Login  = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let data = useSelector(state => state.activeUser)
  console.log(data,"uuuuuusssssss")
  
 
  const onFinish = async (values) => {
    console.log('Success:', values);

   
    let data = await axios.post("http://localhost:8000/api/v1/auth/logins",{
      email: values.email,
      password: values.password,
    })
    console.log(data,"aaseweeeeeeeeee")
    // navigate("/home")
    if(data.data.length > 1){
      console.log("somthing is wrong")
    }else{
      if(!data.data.isEmailVerified){
        console.log("please verified you account")
         
      }else if(data.data.role == "user"){
        console.log("user can't support")
      }else{
        navigate('/dashboard')
        console.log(data.data,"aaaakk")
        localStorage.setItem("user",JSON.stringify(data.data))
        dispatch(activeUser(data.data))

      }
    }

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
      <h5>shuvoakibhossain@gmail.com</h5>
      <h5>nyforo@mailinator.com</h5>
     <Link to="/forgetpass">Forget Password</Link>
    </Form.Item>
  </Form>
  
  )
  
}

export default Login