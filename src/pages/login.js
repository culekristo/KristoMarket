import React from 'react';
import { Amplify } from 'aws-amplify';

import NavBar from "../components/navbar";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react';

import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const Login = () =>{

  return (
    <div>
      <NavBar />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.getUsername}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
export default Login;