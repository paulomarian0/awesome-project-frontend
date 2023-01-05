import { GetAllUsersService } from "./service";


async function GetAllUsersController() {
  const data = await GetAllUsersService()
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error)
  })

  return data;
}

export{
  GetAllUsersController
}