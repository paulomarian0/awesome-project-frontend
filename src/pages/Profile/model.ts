import { notification } from "antd";
import { AxiosResponse } from "axios";
import ProfileType from "../../types/Profile/ProfileType";
import { UpdatePasswordService } from "./service";

async function UpdatePasswordController(requestData:ProfileType, id: number) {

  const data = await UpdatePasswordService(requestData, id)
    .then((response: AxiosResponse) => {
      console.log(response)
      notification.success({ message: "User password updated sucessfully!" });
      return response.data;
    }).catch((error) => {
      notification.error({ message: error.message })
    })

    return data;
}

export{
  UpdatePasswordController
}