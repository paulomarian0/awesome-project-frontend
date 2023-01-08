export interface IUserResponseType {
  id: number
  login: string
  name: string
  admin: boolean
}

export interface IRequestCreateUser {
  login: string
  password: string
  name: string
  admin: boolean
}

export interface IRequestUpdateUser {
  id:number
  login: string
  password: string
  name: string
}