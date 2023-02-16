import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react";

import NavBar from "../components/navbar";
import "./login.css";
import awsmobile from "../aws-exports";

Amplify.configure(awsmobile);

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

/*   AuthContainer() {
    <div class="authenticator-container">
      <Authenticator />
    </div>;
  } */

  render() {
    return (
      <div>
        <NavBar />
        <div className="login-container">
          <div className="auth-container">
            <Authenticator className="login"></Authenticator>
          </div>
        </div>
      </div>
    );
  }
}
