export interface IUserResponseType {
  id: number
  login: string
  name: string
  admin: boolean
}

export interface IRequestCreateUser {
  login: string,
  password: string,
  name: string,
  admin: boolean
}

export interface IRequestUpdateUser {
  login: string,
  password: string,
  name: string,
}