import * as React from "react";
import Link from "next/link";

const Listlink = () => {
  return (
    <>
      <Link href="/mypage">
        <a>mypage</a>
      </Link>
      <br></br>
      <Link href="/signin">
        <a>singin</a>
      </Link>
      <br></br>
      <Link href="/signup">
        <a>signup</a>
      </Link>
      <br></br>
      <Link href="/message">
        <a>message</a>
      </Link>
      <br></br>
      <Link href="/users">
        <a>users</a>
      </Link>
    </>
  );
};

export default Listlink;
