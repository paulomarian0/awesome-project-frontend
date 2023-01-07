import { notification } from "antd";
import { AxiosResponse } from "axios";
import { IRequestCreateUser, IRequestUpdateUser } from "../../types/Users/UserType";
import { GetAllUsersService, DeleteOneUserService, CreateNewUserService, UpdateOneUserService } from "./service";

async function GetAllUsersController() {
  const data = await GetAllUsersService()
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      notification.error({ message: error.data.error });
    })
  return data;
}

async function DeleteOneUserController(id: number) {
  const data = await DeleteOneUserService(id)
    .then((response: AxiosResponse) => {
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
    .then((response: AxiosResponse) => {
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
    .then((response: AxiosResponse) => {
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
  CreateNewUserController,
  UpdateOneUserController
}