import { UserAllParams } from '@/model/user'
export const getUserAll = async (params: UserAllParams) => {
  const url = new URL('http://localhost:4000/user');
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  const response = await fetch(url, params);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};
