const Page = ({ asPath }) => <div>Welcome to next.js! Path: {asPath}</div>;

Page.getInitialProps = async ({ asPath }) => {
  return { asPath };
};

export default Page;
