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

const theme = responsiveFontSizes(createMuiTheme());

export default class _App extends App {
    componentDidMount() {
        fonts();
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

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
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}
