import { GetAllUsersService } from "./service";

async function GetAllUsersController() {
  const data = await GetAllUsersService()
  .then((response) => {
    return response.data;
  })

  return data;
}

export{
  GetAllUsersController
}