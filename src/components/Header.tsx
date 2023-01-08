import { Button, Dropdown } from "antd"
import { useNavigate } from "react-router-dom"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import type { MenuProps } from 'antd';

export default function Header() {
  const navigate = useNavigate();
  const { name, setName, setIsAdmin } = useContext(AuthContext);

  function LogOut() {
    localStorage.clear()
    navigate('/login')
  }

  useEffect(() => {
    setName(localStorage.getItem('userName'))
    setIsAdmin(localStorage.getItem('isAdmin'))
  }, [])

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href="https://www.google.com">
          View profile
        </a>
      ),
    },
    {
      key: '2',
      danger: true,
      label: (
        <a onClick={LogOut}>Logout</a>
      ),
    },
  ];
  return (
    <div style={{ textAlign: 'end', margin: '10px' }}>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Avatar size="large" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}