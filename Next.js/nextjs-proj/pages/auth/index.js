import React from 'react';
import Link from 'next/link';
import User from '../../components/User';

const AuthIndex = () => (
  <div>
    <h1>The Auth Index Page</h1>
    <User name="Dakshak" age={23} />
    <p>Go to <Link href="/"><a><u>Home Page</u></a></Link> </p>

  </div>
);

export default AuthIndex;