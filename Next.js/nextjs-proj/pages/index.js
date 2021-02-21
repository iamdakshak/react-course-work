import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const IndexPage = (props) => (
  <div>
    <h1>The Main Page {props.appName}</h1>
    <p>Go to <Link href="/auth"><a>Auth</a></Link> </p>
    <button onClick={() => Router.push('/auth')}>Go To Auth Page</button>
  </div>
);

IndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App" });
    }, 1000)
  })
  return promise;
}

export default IndexPage;