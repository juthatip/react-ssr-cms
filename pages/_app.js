import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider } from 'react-redux';
import configureStore from '@app/store/store';
import MainLayout from '@app/MainLayout';
import GlobalStyles from '@app/theme/globalStyles';

const isDevMode = process.NODE_ENV !== 'production';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <MainLayout>
            <GlobalStyles />
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
