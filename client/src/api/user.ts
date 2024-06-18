import { UserAllParams } from '@/model/user'
export const getUserAll = async (params: UserAllParams = {
  page: 1,
  pageSize: 10,
  username: '',
  passowrd: '',
}) => {
  const url = new URL('http://localhost:4000/user');
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key] as string)); // 类型断言
  const response = await fetch(url, params);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  console.log(response);
  return response.json();
};
