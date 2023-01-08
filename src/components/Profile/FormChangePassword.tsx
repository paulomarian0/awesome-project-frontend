import { useEffect } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { UpdatePasswordController } from '../../pages/Profile/model';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ProfileType from '../../types/Profile/ProfileType';

export function FormChangePassword() {
  const { userId, setUserId } = useContext(AuthContext);

  const onFinish = (values: ProfileType) => {
    UpdatePasswordController(values, userId)
  }

  useEffect(() => {
    setUserId(localStorage.getItem('userId'))
  }, [])

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', background: 'purple', display: 'flex', height: '100vh' }}>

      <Card style={{ width: '50%' }}>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
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

          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
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