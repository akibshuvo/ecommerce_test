import React, { useState,useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { Select } from 'antd';


const AddVariant = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  const [image, setImage] = useState(null);
  const [productsValue, setProductsValue] = useState([])
  const [proId, setProId] = useState('');

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('variantName', values.variantName);
    formData.append('regularPrice', values.regularPrice);
    formData.append('sellPrice', values.sellPrice);
    formData.append('productID', proId);
    if (image) formData.append('avatar', image);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/product/addvariant',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      message.success('Product variant added successfully');
    } catch (error) {
      message.error('Error adding product: ' + error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Failed to submit form: ' + errorInfo.errorFields.map(field => field.errors).flat().join(', '));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  

  useEffect(()=>{
    async function productsData (){
         let data =await axios.get('http://localhost:8000/api/v1/product/allproducts') 
  
         let arr = []
         data.data.map((item,index)=>(
        //   console.log(item)
          arr.push({
            label: item.productName,
            value: item._id,
          })
  
         ))
  
         setProductsValue(arr)
    }
    productsData()
   },[])


   let handleChangeId = (e)=>{
    setProId(e)
   }
  

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Variant Name"
        name="variantName"
        rules={[{ required: true, message: 'Please input the variant name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Upload Image"
        rules={[{ required: true, message: 'Please upload an image!' }]}
      >
        <Input type='file' onChange={handleImageChange} />
      </Form.Item>

      <Form.Item
        label="Regular Price"
        name="regularPrice"
        rules={[{ required: true, message: 'Please input the regular price!' }]}
      >
        <Input type='number' step="0.01" />
      </Form.Item>

      <Form.Item
        label="Sell Price"
        name="sellPrice"
        rules={[{ required: true, message: 'Please input the sell price!' }]}
      >
        <Input type='number' step="0.01" />
      </Form.Item>

      <Select
    defaultValue="Products"
    style={{
      width: 200,
    }}
    onChange={handleChangeId}
    options={productsValue}
  />

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddVariant;