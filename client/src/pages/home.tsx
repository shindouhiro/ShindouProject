import { ProTable } from '@ant-design/pro-components';

const fetchUserData = async () => {
  const response = await fetch('http://localhost:4000/user');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};
export default function Home() {

  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password'
    },
  ]
  return (
    <div>Home

      <ProTable
        columns={columns}
        // params 是需要自带的参数
        // 这个参数优先级更高，会覆盖查询表单的参数
        // params={params}
        request={fetchUserData}
      />
    </div>
  )
}
