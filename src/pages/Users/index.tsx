import { Button, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../../types/UserType";
import { DeleteOneUserController, GetAllUsersController } from "./model";
import Header from "../../components/Header";
import ModalFormEdit from "../../components/Users/ModalFormEdit";
import ModalFormCreate from "../../components/Users/ModalFormCreate";


export default function Users() {
  const [dataSource, setDataSource] = useState<UserType[]>([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);

  const [userId, setUserId] = useState();

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
        setDataSource(response)
      })
  }

  useEffect(() => {
    getAllUsers();
  }, [])
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
      render: (flag: boolean) => (flag ? <>admin</> : <>n admin</>)
    },
    {
      title: 'Action',
      dataIndex: '',
      render: (_: any, record: any) => (
        <Space >
          <Button type="primary"
            onClick={() => {
              setShowModalEdit(true)
              setUserId(record.id)
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
        dataSource={dataSource}
      />

      <ModalFormEdit
        visible={showModalEdit}
        setVisible={setShowModalEdit}
        id={userId}
      />

      <ModalFormCreate
        visible={showModalCreate}
        setVisible={setShowModalCreate}
      />
    </>
  )
}