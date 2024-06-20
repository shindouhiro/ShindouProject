import dynamic from "next/dynamic";
const ProTable = dynamic(() => import("@ant-design/pro-table"), {
  ssr: false,
});
import type { ProColumns, ActionType, } from '@ant-design/pro-components';
import { DeleteUser, getUserAll } from "@/api/user";
import { UserAllParams } from "@/model/user";
import { useRef, useState } from 'react';
import { message, Popconfirm } from 'antd';
import CreateForm from "@/components/users/CreateForm";
import Head from 'next/head';
import Layout from "@/components/layout";
type UserItem = {
  id: number;
  username: string;
  password: string;
}

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [userItem, setUserItem] = useState<UserItem>();
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
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            setUserItem(record)
            setVisible(true)
          }}
        >
          编辑
        </a>,
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={async () => {
            await DeleteUser(record.id)
            message.success("删除成功")
            actionRef.current?.reload();
          }}
        >
          <a className="text-red-500">删除</a>
        </Popconfirm>
        // <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        //   查看
        // </a>,
        // <TableDropdown
        //   key="actionGroup"
        //   onSelect={() => action?.reload()}
        //   menus={[
        //     { key: 'copy', name: '复制' },
        //     { key: 'delete', name: '删除' },
        //   ]}
        // />,
      ],
    },
  ]
  return (
    <Layout>
    <Head>
      <title>用户列表</title>
      <link rel="icon" href="/favicon.ico"  />
    </Head>
      <ProTable
        columns={columns as ProColumns<Record<string, any>, unknown>[]}
        rowKey="id"
        actionRef={actionRef}
        pagination={{
          pageSize: 10,
        }}
        toolBarRender={() => [
          <CreateForm actionRef={actionRef} visible={visible} setVisible={setVisible} userItem={userItem} />,
        ]}
        request={async (params) => {
          const {list = [],total= 0 } = await getUserAll(params as UserAllParams);
          return {
            data: list,
            total
          }
        }}
      />
    </Layout>
  )
}
