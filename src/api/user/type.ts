
//
export interface loginFormData{
  username: string,
  password: string,
}

interface dataType {
  token?: string,
  message?: string,
}
interface userType {
  checkUser: userInfo
}
interface userInfo {
  userId: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}

export interface loginResponseData{
  code: number,
  data: dataType,
}

export interface userInfoReponseData{
  code: number,
  data: userType,
}