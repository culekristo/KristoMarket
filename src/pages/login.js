import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';

import NavBar from "../components/navbar";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const Login = () =>{

  return (
    <div>
      <h3>Login</h3>
      <NavBar />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
export default Login;