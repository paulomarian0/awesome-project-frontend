import Axios from '../../Services/Config/API';
import { LoginType } from '../../types/Login/LoginType';

async function LoginService(values: LoginType) {
  const responseData = await Axios.post<Promise<LoginType>>('/login', {
    login: values.login,
    password: values.password
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    })

  return responseData;
}

export {
  LoginService
}