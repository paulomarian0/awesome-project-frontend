import Axios from '../../Services/Config/API';
import { IRequestCreateUser, IRequestUpdateUser, IUserResponseType } from '../../types/Users/UserType';

async function GetAllUsersService() {
  const responseData = await Axios.get<Promise<IUserResponseType>>('/users')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    })

  return responseData;
}

async function DeleteOneUserService(id: number) {
  const responseData = await Axios.delete<Promise<IUserResponseType>>(`/users/?id=${id}`)
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error.response;
    })

  return responseData;
}

async function CreateNewUserService(requestData: IRequestCreateUser) {
  const responseData = await Axios.post<Promise<IUserResponseType>>(`/users/`, {
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
  const responseData = await Axios.put<Promise<IUserResponseType>>(`users/?id=${id}`, {
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