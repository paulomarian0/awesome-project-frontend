import { Button, Card, Dropdown } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import type { MenuProps } from 'antd';
import './styles.css';
import Logo from '../../images/logo-generic.png';


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
        <a onClick={() => navigate('/profile')}>
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
    <div className="container-header">

    <Link to="/">
      <img src={Logo} width="100px"/>
    </Link>
      <a href="/users">
        Users
      </a >
      <a href="/profile">
        Profile
      </a>
      <a onClick={LogOut}  >
        Logout
      </a>
    </div>
  )
}