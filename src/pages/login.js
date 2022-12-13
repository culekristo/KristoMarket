import React, {useState} from 'react';
import NavBar from "../components/navbar";
//import {Auth} from "aws-amplify";

/* function userlogin() {
  Auth.signIn(username, password).then((result) => {
    //Success 
   }).catch((err) => {
    // Something is Wrong
   })
} */

const Login = () =>{
  //const [username, password] = useState(0);

  return (
    <div>
      <h3>Login</h3>
      <NavBar />
      <div class="form">
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <input type="submit" id="submit" value="Submit" />
      </div>
    </div>
  );
}
export default Login;