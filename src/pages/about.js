import React from 'react';
import NavBar from "../components/navbar";

const About = () =>{
  return (
    <div className='text-center'>
      <NavBar/>
      <h1>About Us</h1>
      <p>Welcome to our company!</p>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
      </ul>
      <p>Contact us today to learn more about how we can help you!</p>
      <ul>
        <li>Email: userservices@projectm4.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </div>
  );
}
export default About;
