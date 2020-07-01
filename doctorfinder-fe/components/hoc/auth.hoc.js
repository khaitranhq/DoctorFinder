// import React, { Component } from "react";
// import Router from "next/router";
// import { changePage } from "../../src/actions/layout.actions";

// export default function withAuth(AuthComponent, roles = []) {
//   return class Authenticated extends Component {
//     static async getInitialProps(ctx) {
//       // Ensures material-ui renders the correct css prefixes server-side
//       let userAgent;
//       if (process.browser) {
//         userAgent = navigator.userAgent;
//       } else {
//         userAgent = ctx.req.headers["user-agent"];
//       }
//       const isEmptyObject = obj => {
//         return Object.entries(obj).length === 0 && obj.constructor === Object;
//       };


//       const user = ctx.store.getState().auth.user;
//       const isLoggedIn = ctx.store.getState().auth.isLoggedIn;

//       const isRedirectIfAuthenticated =
//         ctx.pathname === "/auth/signin" || ctx.pathname === "/auth/signup";
//       let isRestrictedAccess = false;
//       if (roles.length != 0 && !isEmptyObject(user)) {
//         isRestrictedAccess = !roles.includes(user.role);
//       }
//       // Check if Page has a `getInitialProps`; if so, call it.
//       let pageProps = {};
//       if (isLoggedIn && !isRestrictedAccess) {
//         pageProps =
//           AuthComponent.getInitialProps &&
//           (await AuthComponent.getInitialProps(ctx));
//       }

//       // Return props.
//       return {
//         ...pageProps,
//         userAgent,
//         isLoggedIn,
//         isRedirectIfAuthenticated,
//         user,
//         isRestrictedAccess
//       };
//     }

//     componentDidMount() {
//       const { isRedirectIfAuthenticated, isLoggedIn } = this.props;

//       if (isRedirectIfAuthenticated) {
//         if (isLoggedIn) {
//           Router.push("/");
//         }
//       } else {
//         if (!isLoggedIn) {
//           Router.push("/auth/signin");
//         }
//       }
//     }

//     constructor(props) {
//       super(props);
//     }

//     render() {
//       const {
//         isRedirectIfAuthenticated,
//         isLoggedIn,
//         isRestrictedAccess
//       } = this.props;

//       if (isRedirectIfAuthenticated) {
//         if (isLoggedIn) {
//           return <div>LOADING....</div>;
//         }
//         return <AuthComponent {...this.props} />;
//       } else {
//         if (!isLoggedIn) {
//           return <div>LOADING....</div>;
//         } else if (isRestrictedAccess) {
//           return <div data-cy='permission-error'>You do not have permission to view this page</div>;
//         }
//         return <AuthComponent {...this.props} />;
//       }
//     }
//   };
// }
