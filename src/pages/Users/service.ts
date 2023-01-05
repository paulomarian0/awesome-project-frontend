import Axios from '../../Services/Config/API';

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

export {
  GetAllUsersService
}