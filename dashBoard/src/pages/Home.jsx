import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Col, Row  } from 'antd';
import { useDispatch } from 'react-redux';
import { activeUser } from '../slices/userSlices';
import { Outlet, useNavigate } from 'react-router-dom';


const Home = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let users = JSON.parse(localStorage.getItem("user"))
  console.log(users,"l;lll")

  const items = [
    users.role =="admin" &&
    {
      
      key: 'sub1',
      label: 'Users',
      icon: <MailOutlined />,
      children: [
        
            {
              key: '/dashboard/customer',
              label: 'customer',
            },
            {
              key: '/dashboard/merchant',
              label: 'merchant',
            },
          ],
       
    },
    {
      type: 'divider',
    },
    {
      key: 'sub2',
      label: 'Add Products',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '/dashboard/creatProducts',
          label: '+ Add',
        },
        
       
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub2',
      label: 'Add Catagories',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '/dashboard/creatcate',
          label: '+AddCatarogy',
        },
        {
          key: '/dashboard/creatsubcate',
          label: '+AddSubCatagory',
        },
       
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'View Products',
      icon: <SettingOutlined />,
      children: [
        {
          key: '/dashboard/viewcate',
          label: '*_*  ViewCatarory',
        },
        {
          key: '/dashboard/viewsub',
          label: '*_*  ViewSubcatgory',
        },
        
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub5',
      label: 'Discount',
      icon: <SettingOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
   
  ];
  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key)
  };


  let handleLogOut = ()=>{
    dispatch(activeUser(null))
    navigate("/login")
    
  }
  return (
    <>
    <Row>
      <Col span={6}>
      <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={items}
    
  />
  <button onClick={handleLogOut}>logOut</button>

      </Col>
      <Col span={18}>
        <Outlet/>
        
      </Col>
    </Row>
    
  </>
  
  )
}

export default Home