export interface UserAllParams {
  pageSize: number;
  current: number;
  username: string;
  password: string;
}


export  type UserParams  = Pick<UserAllParams, 'username' | 'password'>
