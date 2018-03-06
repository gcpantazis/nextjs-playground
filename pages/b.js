import Link from "next/link";

import { setupRouter } from "../lib/configure-page";

const Page = ({ asPath }) => {
  setupRouter();

  return (
    <div>
      This page should only be visible as /other. (Actual path: {asPath}).
      <p>
        <Link href="/a" as="/">
          <a>Go visit home</a>
        </Link>
      </p>
    </div>
  );
};

Page.getInitialProps = async ({ asPath }) => {
  return { asPath };
};

export default Page;
