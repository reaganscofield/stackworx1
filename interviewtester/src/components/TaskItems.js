import React, { Component } from 'react';


class TaskItem extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }
        // delete function
        deleteTask(id){
          //console.log("deleted");
          this.props.onDelete(id);  //pass it to Todolist.js compon
        }



  render() {
    return (
      // sending task to UI
      <li className="list-group-item">
        <span>{this.props.tasks.task}</span>
        <button className="float-right btn btn-sm btn-danger"
          onClick={this.deleteTask.bind(this, this.props.tasks.id)}>
          Delete Task
        </button>
      </li>
    );
  }
}

export default TaskItem;
