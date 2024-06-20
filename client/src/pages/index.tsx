// pages/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>
      <div>Hello, world!</div>
    </>
  )
}
