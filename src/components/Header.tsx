import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();

  const {name} = useContext(AuthContext);
  const nameUser = name;

  function LogOut() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return(
    <div style={{textAlign: 'end'}}>
         <Avatar icon={<UserOutlined />} />
         <span>{nameUser}</span>
         <Button onClick={LogOut}>Logout</Button>

    </div>
  )
}