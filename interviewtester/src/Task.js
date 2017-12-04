import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';



class Task extends Component {
  render(){
    return(<div className="App">
              <Navbar />
              <h1 className="mt-5 cursorOn">Got to Home Page </h1>
              <Link  className="nav-link" to="/" >
                <button className="btn btn-lg btn-dark mt-5 cursorOn">Home Page!</button>
              </Link>
          </div>
    );
  }
}

export default Task;
