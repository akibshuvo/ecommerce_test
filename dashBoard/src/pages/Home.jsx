import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const Home = () => {
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
              key: '1',
              label: 'customer',
            },
            {
              key: '2',
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
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
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
  };
  return (
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
  )
}

export default Home