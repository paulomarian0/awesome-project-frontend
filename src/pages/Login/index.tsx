import { Button, Form, Input, notification, Card } from 'antd';
import './styles.css';
import { LoginType } from '../../types/Login/LoginType';
import { useNavigate } from 'react-router-dom';
import { LoginService } from './service';
import { AxiosResponse } from 'axios';

export default function Login() {
  const navigate = useNavigate();

  async function onFinish(values: LoginType) {
    const data = await LoginService(values)
      .then((response: AxiosResponse) => {
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('userName', response.data.userData.user)
        localStorage.setItem('isAdmin', response.data.userData.admin)
        navigate('/users')
        return response.data;
      })
      .catch((error) => {
        notification.error({ message: error.data.message });
      })

    return data;
  };

  return (
    <div className="container">
      <Card className='card-form'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>

  )
}