import React from "react";
import App from "next/app";
import Head from "next/head";
import {
  ThemeProvider,
  responsiveFontSizes,
  createMuiTheme,
} from "@material-ui/core/styles";
import fonts from "../src/utils/font";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers, initialState } from "../src/utils/reducers";
import withRedux from "next-redux-wrapper";
import authInit from "../src/utils/authInit";

const theme = responsiveFontSizes(createMuiTheme());

const initStore = (initialState = {}) => createStore(Reducers, initialState);

const _App = withRedux(initStore)(
  class _App extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};
      authInit(ctx);
      let rootToken = "";
      if (ctx.store.getState().userProfile) {
        rootToken = ctx.store.getState().userProfile.token;
      }

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps, rootToken };
    }

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      fonts();
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <React.Fragment>
          <Head>
            <title>Doctor Finder</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </React.Fragment>
      );
    }
  }
);

export default _App;
