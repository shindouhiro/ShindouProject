import Layout from '../components/layout/index'
import { useRequest } from 'ahooks';
import React from 'react';
import { Table } from "antd";
import { getUserAll } from '@/api/user';



export default function About() {
  const { data, loading } = useRequest(getUserAll);
  console.log(data)


  const columns = [
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'password',
      key: 'age',
    },
  ];
  return (
    <Layout>
      <div>
        About
        <Table dataSource={data?.data ?? []} columns={columns} loading={loading} />;
      </div>
    </Layout>
  )
}

