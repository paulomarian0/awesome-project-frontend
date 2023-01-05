import { Table } from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../../types/UserType";
import { GetAllUsersController } from "./model";



export default function Users() {

  const [dataSource, setDataSource] = useState<UserType[]>();


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

 
    }
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