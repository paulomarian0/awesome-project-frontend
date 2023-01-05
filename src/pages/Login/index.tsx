import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import Card from 'antd/es/card';
import './styles.css';
import { LoginController } from './model';
import { LoginType } from '../../types/LoginType';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function onFinish(values: LoginType) {
    LoginController(values.login, values.password)
      .then((response) => {
        navigate('/users')
      }).catch((error) => {
        console.log(error)
      })
  };

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