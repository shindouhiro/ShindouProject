import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  LogoutOutlined
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard,} from '@ant-design/pro-components';
import {Dropdown } from 'antd';
import defaultProps from './_defaultProps';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { useLocalStorageState } from 'ahooks';
// 使用动态加载的方式，可以使部分组件在客户端渲染完成后再执行
const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
  ssr: false,
});
export default ({children}: {children: React.ReactNode}) => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useLocalStorageState('use-local-storage-state-demo2', {
    defaultValue: '/list/sub-page/sub-sub-page1',
  });
  const router = useRouter();
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: '退出登录',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
              
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
       
        onMenuHeaderClick={(e) => {
          console.log(e);
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              console.log({item});
              setPathname(item.path || '/welcome');
              item.isLink && router.push(item.path as string);
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            {children}
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};
