import { Button, Modal, Form, Input, Switch } from "antd";
import { CreateNewUserController } from "../../pages/Users/model";
import { IRequestCreateUser } from "../../types/Users/UserType";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface IPropsModal {
  setVisible: (boolean: boolean) => void,
  visible: boolean
}

export default function ModalFormCreate(props: IPropsModal) {
  const [form] = Form.useForm();
  const { setNeedUpdateListUser } = useContext(AuthContext);

  const handleCancel = () => {
    props.setVisible(false);
  };

  const onFinish = (values: IRequestCreateUser) => {
    CreateNewUserController(values)
      .then(() => {
        setNeedUpdateListUser(true);
        props.setVisible(false);
        form.resetFields()
      })
  };

  return (
    <Modal
      title="Create a new user"
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
        form={form}
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
          rules={[{ required: true, message: "Please input your username!" }]}
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

        <Form.Item
          label="Admin?"
          name="admin"
          valuePropName="checked"
          initialValue={false}
        >
          <Switch />
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