import { LoginType } from "../../types/LoginType";
import { LoginService } from "./service";

interface Respose {
  access_token: string,
  status: string
}

async function LoginController(login: string, password: string) {
  const data = await LoginService(login, password)
  .then((response: any) => {
    localStorage.setItem('token', response.data.access_token)
    return response.data;
  })
  .catch((error) => {
    console.log(error)
  })

  return data;
}

export{
  LoginController
}