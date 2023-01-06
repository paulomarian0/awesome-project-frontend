import React, { useEffect } from 'react';
import { Button, Form, Input, notification, Card } from 'antd';
import './styles.css';
import { LoginType } from '../../types/LoginType';
import { useNavigate } from 'react-router-dom';
import { LoginService } from './service';

export default function Login() {
  const navigate = useNavigate();

  async function onFinish(values: LoginType) {
    const data = await LoginService(values.login, values.password)
    .then((response: any) => {
      localStorage.setItem('token', response.data.access_token)
      navigate('/users')
      return response.data;
    })
    .catch((error) => {
      notification.error({ message: error.data.message });
    })
  
    return data;
  };

  // LoginService(data)
  // .then((res: any) => {
  //   localStorage.setItem("@token", res.data.Token);
  //   GetUserInfor().then((res) => {
  //     setUserInfor({ ...res, token: localStorage.getItem("@token") });
  //     history.push("/dashboard/transporte");
  //   });
  // })
  // .catch((err) => {
  //   notification.error({ message: err.data.message });
  // });
  // useEffect(() => {
  //   localStorage.removeItem("token");
  // },[])

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
            label="Username"
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
      <Card className='card-image'>
        <div >
          <img src='https://www.meme-arsenal.com/memes/3e48dd79ca6bbb33b6e8c8008abf1a40.jpg' width={"100%"} />
        </div>
      </Card>
    </div>

  )
}