import Router from "next/router";

export const setupRouter = () => {
  if (typeof window !== "undefined") {
    Router.setBeforePopState(({ url, as, options }) => {
      if (as !== "/" || as !== "/other") {
        throw new Error("Bad route!");
      }
    });
  }
};
