import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import slugify from 'react-slugify';

const AddProducts = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [slugText, setSlugText] = useState('');

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('productName', values.productName);
    formData.append('descriptions', description);
    formData.append('regularPrice', values.regularPrice);
    formData.append('sellPrice', values.sellPrice);
    formData.append('slug', slugText);
    // if (image) formData.append('avatar', image);

    if (image && Array.isArray(image)) { // Check if image is an array
      image.forEach((file) => {
        formData.append('avatar', file); // Append each file
      });
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/product/addproducts',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data, 'Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleImageChange = (e) => {
    setImage([...e.target.files]);
  };


  const handleChange = (e)=>{
     console.log(e.target.value)
     setSlugText(slugify(e.target.value))
    //  slugify(e.target.value)
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
        label="Product Name"
        name="productName"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input onChange={handleChange} />
      </Form.Item>

      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            console.log(editor.getData());
            setDescription(editor.getData());
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>

      <Form.Item
        label="Upload images"
        name="image"
        rules={[{ required: true, message: 'Please upload an image!' }]}
      >
        <Input type='file' onChange={handleImageChange} multiple/>
      </Form.Item>

      <Form.Item
        label="regular price"
        name="regularPrice"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="sell price"
        name="sellPrice"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input />
      </Form.Item>


      <span>Slug: <input style={{width:'100%', padding:'4px', marginBottom:'30px',}} type="text" disabled value={slugText}/></span>

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

export default AddProducts;