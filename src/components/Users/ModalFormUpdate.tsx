import { Button, Modal, Form, Input } from "antd";
import { UpdateOneUserController } from "../../pages/Users/model";
import { IRequestUpdateUser } from "../../types/Users/UserType";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

interface IPropsModal {
  setVisible: (boolean: boolean) => void,
  visible: boolean
  userDataForUpdate: IRequestUpdateUser
}

export default function ModalFormUpdate(props: IPropsModal) {
  const [form] = Form.useForm();
  const { setNeedUpdateListUser } = useContext(AuthContext);
  const userData = props.userDataForUpdate
  const userId = props.userDataForUpdate.id

  const handleCancel = () => {
    props.setVisible(false);
  };

  //this useeffect fix a bug https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  useEffect(() => {
    form.setFieldsValue(userData)
  }, [userData])

  const onFinish = (values: IRequestUpdateUser) => {
    if (!userId)
      return

    UpdateOneUserController(values, userId)
      .then(() => {
        setNeedUpdateListUser(true);
        form.resetFields()
        props.setVisible(false);
      })
  }

  return (
    <Modal
      forceRender
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
          rules={[{ required: true, message: "Please input your login!" }]}
        >
          <Input />
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