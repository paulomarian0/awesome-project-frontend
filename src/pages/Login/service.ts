import Axios from '../../Services/Config/API';
import { LoginType } from '../../types/LoginType';

async function LoginService(login: string, password: string) {
  const responseData = await Axios.post<Promise<LoginType>>('/login', {
   login,
   password
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