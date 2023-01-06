import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Header() {
  const navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return(
    <div style={{textAlign: 'end'}}>
         <Avatar icon={<UserOutlined />} />
         <span>Nome</span>
         <Button onClick={LogOut}>Logout</Button>

    </div>
  )
}