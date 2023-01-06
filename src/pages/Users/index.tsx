import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../../types/UserType";
import { GetAllUsersController } from "./model";
import Header from "../../components/Header";

export default function Users() {
  const [dataSource, setDataSource] = useState<UserType[]>([]);

  useEffect(() => {
    GetAllUsersController()
      .then((response) => {
        setDataSource(response)
      })
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
          <Button type="primary" onClick={() => console.log(record.id)}>Edit </Button>
          <Button danger type="primary" onClick={() => console.log(record.id)}>Delete</Button>
        </Space>
      )
    },
  ];


  return (
    <>
      <Header />
      <Table
        columns={columns}
        dataSource={dataSource}
      />
    </>
  )
}