import Axios from '../../Services/Config/API';

interface IRequestCreateUser {
  login: string,
  password: string,
  name: string,
  admin: boolean
}

interface IRequestUpdateUser {
  login: string,
  password: string,
  name: string,
}

async function GetAllUsersService() {
  const responseData = await Axios.get<Promise<any>>('/users')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    })

  return responseData;
}

async function DeleteOneUserService(id: number) {
  const responseData = await Axios.delete<Promise<any>>(`/users/?id=${id}`)
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error.response;
    })

  return responseData;
}

async function CreateNewUserService(requestData: IRequestCreateUser) {
  const responseData = await Axios.post<Promise<any>>(`/users/`, {
    login: requestData.login,
    name: requestData.name,
    password: requestData.password,
    admin: requestData.admin
  })
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error.response;
    })

  return responseData;
}

async function UpdateOneUserService(requestData: IRequestUpdateUser, id: number) {
  const responseData = await Axios.put<Promise<any>>(`users/?id=${id}`, {
    login: requestData.login,
    password: requestData.password,
    name: requestData.name,
  })
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error.response;
    })

  return responseData;
}
export {
  GetAllUsersService,
  DeleteOneUserService,
  CreateNewUserService,
  UpdateOneUserService
}