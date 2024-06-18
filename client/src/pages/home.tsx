import dynamic from "next/dynamic";
const ProTable = dynamic(() => import("@ant-design/pro-table"), {
  ssr: false,
});
import { Button } from "antd";
import { getUserAll } from "@/api/user";


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
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
            }}
          >
            新建
          </Button>,
        ]}
        // params 是需要自带的参数
        // 这个参数优先级更高，会覆盖查询表单的参数
        // params={params}
        request={getUserAll}
      />
    </div>
  )
}
