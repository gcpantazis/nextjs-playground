import Router from "next/router";

export const setupRouter = () => {
  if (typeof window !== "undefined") {
    Router.beforePopState(({ url, as, options }) => {
      if (as !== "/" || as !== "/other") {
        // SSR-render the specified location. (Should 404)
        window.location.href = as;
        return false;
      }

      return true;
    });
  }
};
