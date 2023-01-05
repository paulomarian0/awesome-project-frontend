import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../../types/UserType";
import { GetAllUsersController } from "./model";

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
      key: 'x',
      render: () => (
        <div style={{display: 'flex'}}>
        <Button type="primary">Editar</Button>
        <Button>Deletar</Button>
        </div>
      )
    },
  ];


  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
      />

    </>
  )
}