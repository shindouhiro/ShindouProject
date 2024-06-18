import dynamic from "next/dynamic";
const ProTable = dynamic(() => import("@ant-design/pro-table"), {
  ssr: false,
});
import type { ProColumns, ActionType, } from '@ant-design/pro-components';
import { getUserAll } from "@/api/user";
import { UserAllParams } from "@/model/user";
import { useRef } from 'react';
import CreateForm from "@/components/users/CreateForm";
 type UserItem = {
  id: number;
  username: string;
  password: string;
}

export default function Home() {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<UserItem>[] = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
  ]
  return (
      <ProTable
        columns={columns as ProColumns<Record<string, any>, unknown>[]}
        rowKey="id"
        actionRef={actionRef}
        pagination={{
          pageSize: 10,
        }}
        toolBarRender={() => [
           <CreateForm actionRef={actionRef}/>,
        ]}
        request={async (params) => {
          return getUserAll(params as UserAllParams);
        }}
      />
  )
}
