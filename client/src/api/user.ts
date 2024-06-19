import { UserAllParams, UserParams } from '@/model/user'
export const getUserAll = async (params: UserAllParams = {
  current: 1,
  pageSize: 10,
  username: '',
  password: '',
}, formData: Object = {}) => {
  console.log(formData)
  const url = new URL('http://localhost:4000/user');
  Object.keys(params).forEach(key =>
    url.searchParams.append(
      key,
      String(params[key as keyof UserAllParams] as string | number)
    )
  );

  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(
        key,
        value
      )
    }
  });
  const response = await fetch(url, params);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  console.log(response);
  return response.json();
};


export const CreateUser = async (data: UserParams) => {
  const url = new URL('http://localhost:4000/user');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
};



export const UpdateUser = async (userId: number, data: UserParams) => {
  const url = new URL(`http://localhost:4000/user/${userId}`);
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
};

export const DeleteUser = async (userId: number) => {
  const url = new URL(`http://localhost:4000/user/${userId}`);
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
  return response.json();
};
