import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { IRequestUpdateUser, IUserResponseType } from "../../types/Users/UserType";
import { DeleteOneUserController, GetAllUsersController } from "./model";
import Header from "../../components/Header";
import ModalFormCreate from "../../components/Users/ModalFormCreate";
import ModalFormUpdate from "../../components/Users/ModalFormUpdate";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToolFilled, UserOutlined } from '@ant-design/icons'

export default function Users() {
  const [listUsers, setListUsers] = useState<IUserResponseType[]>([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const { needUpdateListUser, setNeedUpdateListUser } = useContext(AuthContext)
  const [userId, setUserId] = useState();
  const [userDataForUpdate, setUserDataForUpdate] = useState<IRequestUpdateUser>({} as IRequestUpdateUser);

  const confirmPop = () => {
    if (!userId)
      return

    DeleteOneUserController(userId)
      .then(() => {
        getAllUsers()
      })
  };

  async function getAllUsers() {
    GetAllUsersController()
      .then((response) => {
        setListUsers(response)
        setNeedUpdateListUser(false);
      })
  }

  useEffect(() => {
    getAllUsers();
  }, [needUpdateListUser])

  const columns = [
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
      width: '40%'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '40%'

    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
      width: '10%',
      render: (flag: boolean) => (flag ?
        <Tooltip title="This user is an admin">
          <ToolFilled />
        </Tooltip> 
        : 
        <Tooltip title="This user is a simple user (not admin)">
          <UserOutlined />
        </Tooltip> 
        )
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'id',
      width: '10%',
      render: (_: any, record: any) => (
        <Space >
          <Button type="primary"
            onClick={() => {
              setShowModalEdit(true)
              setUserId(record.id)
              setUserDataForUpdate(record)
            }}>Edit</Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={confirmPop}
          >
            <Button danger type="primary" onClick={() => setUserId(record.id)}>Delete</Button>
          </Popconfirm>
        </Space>
      )
    },
  ];

  return (
    <>
      <Header />
      <div style={{ textAlign: 'end' }}>
        <Button onClick={() => setShowModalCreate(true)}>Create a new user</Button>
      </div>

      <Table
        columns={columns}
        dataSource={listUsers}
        rowKey="id"
      />

      <ModalFormUpdate
        visible={showModalEdit}
        setVisible={setShowModalEdit}
        userDataForUpdate={userDataForUpdate}
      />

      <ModalFormCreate
        visible={showModalCreate}
        setVisible={setShowModalCreate}
      />
    </>
  )
}