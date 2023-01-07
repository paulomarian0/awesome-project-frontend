import { notification } from "antd";
import { GetAllUsersService, DeleteOneUserService, CreateNewUserService, UpdateOneUserService } from "./service";

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

async function GetAllUsersController() {
  const data = await GetAllUsersService()
    .then((response: any) => {
      return response.data;
    })
    .catch((error) => {
      notification.error({ message: error.data.error });
    })
  return data;
}

async function DeleteOneUserController(id: number) {
  const data = await DeleteOneUserService(id)
    .then((response: any) => {
      notification.success({ message: "User deleted sucessfully!" });
      return response.data;
    })
    .catch((error) => {
      notification.error({ message: error.data.error });
    })
  return data;
}

async function CreateNewUserController(requestData: IRequestCreateUser) {

  const data = await CreateNewUserService(requestData)
    .then((response: any) => {
      notification.success({ message: "User created sucessfully!" });
      return response.data;
    })
    .catch((error) => {
      notification.error({ message: error.statusCode });
    })
  return data;
}

async function UpdateOneUserController(requestData: IRequestUpdateUser, id: number) {
  const data = await UpdateOneUserService(requestData, id)
    .then((response) => {
      notification.success({ message: "User updated sucessfully!" });
      return response.data;
    }).catch((error) => {
      notification.error({ message: error.statusCode })
    })

    return data;
}
export {
  GetAllUsersController,
  DeleteOneUserController,
  CreateNewUserController
}