import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { UpdateOneUserService } from "../../pages/Users/service";

interface IPropsModal {
  setVisible: (boolean: boolean) => void,
  visible: boolean
  id: number | undefined
}

export default function ModalFormEdit(props: IPropsModal) {

  const userId = props.id

  const handleCancel = () => {
    props.setVisible(false);
  };

  const onFinish = (values: any) => {
    if (!userId)
      return

    UpdateOneUserService(values, userId)
      .then(() => {
        props.setVisible(false);
      })
  }

  return (
    <Modal
      title="Edit a user"
      open={props.visible}
      footer={false}
      onCancel={handleCancel}
    >
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
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Please input your login!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}