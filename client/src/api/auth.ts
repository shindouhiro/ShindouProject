import { UserParams } from '@/model/user'
import { post } from '@/utils/request'
export const  login = async(data: UserParams) => {
  return  await post('/auth/login', data) 
}
 