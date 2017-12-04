import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import Todoform from './components/Todoform';


var firebase = require('firebase');


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCL4dHZe2MAxNbUgwAQmTi4yjaYrrWV_pw",
  authDomain: "staxkworx.firebaseapp.com",
  databaseURL: "https://staxkworx.firebaseio.com",
  projectId: "staxkworx",
  storageBucket: "staxkworx.appspot.com",
  messagingSenderId: "217149732826"
};
firebase.initializeApp(config);




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      task: []   //an empty array belong to the life circle method

    };

  }

componentWillMount() {
  this.setState({task: [
    {id: uuid.v4(), task: "this is firts task"},
    {id: uuid.v4(), task: "this is second task"},
    {id: uuid.v4(), task: "this is third task"},
    {id: uuid.v4(), task: "this is four task"},
    {id: uuid.v4(), task: "this is five task"}
  ]});
}


// getting data from todoform components
handleAddTask(task){
  //console.log(task);
  let taskItem  = this.state.task;
  taskItem.push(task);
  this.setState({task: taskItem});
}




// deleting task, its from Todolist.js
handleDeleteTask(id){
  //console.log(id);
  let tasks = this.state.task;
  //to find the id that much current index
  let index = tasks.findIndex(x => x.id === id);
  //to delete the current id
  tasks.splice(index, 1);
  //reset state
  this.setState({projects:tasks});
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Todoform addTask={this.handleAddTask.bind(this)} />
        <Todolist task={this.state.task}  onDelete={this.handleDeleteTask.bind(this)} />
      </div>
    );
  }
}

export default App;
