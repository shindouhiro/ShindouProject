import { Button, Result } from 'antd';
import React from 'react';
import Link from 'next/link'
const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="404"
    extra={
     
      <Link href="/">回到首页</Link>
    }
  />
);

export default NoFoundPage;
