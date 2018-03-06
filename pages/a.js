import { setupRouter } from "../lib/configure-page";

const Page = ({ asPath }) => {
  setupRouter();
  return <div>Welcome to next.js! Path: {asPath}</div>;
};

Page.getInitialProps = async ({ asPath }) => {
  return { asPath };
};

export default Page;
