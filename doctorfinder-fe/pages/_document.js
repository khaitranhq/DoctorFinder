import React, { Fragment } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";

const theme = responsiveFontSizes(createMuiTheme());

class _Document extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    ></meta>
                </Head>
                <body>
                    <div id="wrapper">
                        <Main />
                        <NextScript />
                    </div>
                    <div id="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </body>
            </Html>
        );
    }
}

_Document.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            <Fragment key="styles">
                {initialProps.styles}
                {sheets.getStyleElement()}
            </Fragment>,
        ],
    };
};

export default _Document;
