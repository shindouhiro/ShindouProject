import Layout from '../components/layout/index'
import { useRequest } from 'ahooks';
import React from 'react';
import { Table } from "antd";



const fetchUserData = async () => {
  const response = await fetch('http://localhost:4000/user');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};
export default function About() {
  const { data, loading } = useRequest(fetchUserData);


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
        <Table dataSource={data} columns={columns} loading={loading} />;
      </div>
    </Layout>
  )
}

