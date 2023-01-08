import Axios from '../../Services/Config/API';
import ProfileType from '../../types/Profile/ProfileType';

async function UpdatePasswordService(requestData: ProfileType, id: number) {
  console.log("requestData", requestData)
  const responseData = await Axios.put<Promise<ProfileType>>(`/users/profile?id=${id}`, {
    login: requestData.login,
    newPassword: requestData.newPassword,
    password: requestData.password,
  })
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error.response;
    })

  return responseData;
}

export {
  UpdatePasswordService
}