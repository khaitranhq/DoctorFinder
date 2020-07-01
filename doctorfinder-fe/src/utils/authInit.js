import { getCookie } from "./cookies";
import { validateState } from "./actions";

export default async function(ctx) {
  if (ctx.isServer) {
      if (ctx.req.headers.cookie) {
          if(getCookie("auth", ctx.req)) {
              const authInfo = JSON.parse(
                  decodeURIComponent(getCookie("auth", ctx.req))
              );
              validateState(authInfo)(ctx.store.dispatch);
          }
      }
  } else {
      if(getCookie("auth")) {
          const authInfo = JSON.parse(
              decodeURIComponent(getCookie("auth", ctx.req))
          );
          validateState(authInfo)(ctx.store.dispatch);
      }
  } 
}
