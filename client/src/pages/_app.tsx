import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import '../app/globals.css'
import theme from './theme/themeConfig';
import {
  store
} from '@/store'
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
    <ConfigProvider theme={theme} >
      <Component {...pageProps} />
    </ConfigProvider>
  </Provider>
  )
}
 

export default App;
