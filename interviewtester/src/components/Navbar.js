import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="">
            StackWorx Challenge
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link  className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item active">
               <Link className="nav-link" to="/task" >Manager Tasks</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;
