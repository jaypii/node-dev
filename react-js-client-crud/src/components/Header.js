import React, {Component} from 'react';

class Header extends Component {
    render() {
       return (
        <div className="card text-dark text-center bg-light mt-3 p-2">
          <h3 className="card-title">React + Node.js + Express + MySQL</h3>
          <p className="card-text">Full-stack example with a CRUD Application.<br/>The back-end server uses Node.js + Express for REST APIs<br />Front-end side is a React.js client with React Router, Axios &amp; Bootstrap.</p>
      </div>
      );
    }
 }
 
 export default Header;