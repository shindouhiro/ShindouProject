import { UserAllParams, UserParams } from '@/model/user'
import { get, post, put, del } from '@/utils/request';
export const getUserAll = async (params: UserAllParams = {
  current: 1,
  pageSize: 10,
  username: '',
  password: '',
}, formData: Object = {}) => {
  return await get('/user', {
    ...params,
    ...formData
  })
};

export const CreateUser = async (data: UserParams) => {
  return await post('/user', data)
};

export const UpdateUser = async (userId: number, data: UserParams) => {
  return put(`/user/${userId}`, data)
};

export const DeleteUser = async (userId: number) => {
  return await del(`/user/${userId}`)
};
