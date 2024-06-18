import dynamic from "next/dynamic";
const ProTable = dynamic(() => import("@ant-design/pro-table"), {
  ssr: false,
});

const fetchUserData = async (params) => {

  const url = new URL('http://localhost:4000/user');

  // 添加查询参数
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  const response = await fetch(url, params);

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
        rowKey="user-key"
        search={true}
        // params 是需要自带的参数
        // 这个参数优先级更高，会覆盖查询表单的参数
        // params={params}
        request={fetchUserData}
      />
    </div>
  )
}
