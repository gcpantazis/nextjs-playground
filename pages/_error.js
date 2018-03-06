import React from "react";
import Link from "next/link";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : "An error occurred on client"}
        </p>
        <br />
        <p>
          <Link href="/a" as="/">
            <a>Go back home</a>
          </Link>
        </p>
      </div>
    );
  }
}
