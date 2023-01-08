import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const {name, setName, isAdmin, setIsAdmin} = useContext(AuthContext);

  function LogOut() {
    localStorage.clear()
    navigate('/login')
  }

  useEffect(() => {
    setName(localStorage.getItem('userName'))
    setIsAdmin(localStorage.getItem('isAdmin'))
  },[])

  return(
    <div style={{textAlign: 'end'}}>
         <Avatar icon={<UserOutlined />} />
         <span>{name}</span>
         <Button onClick={LogOut}>Logout</Button>

    </div>
  )
}