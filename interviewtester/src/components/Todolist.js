import React, { Component }  from 'react';
import TaskItems from './TaskItems';






class Todolist extends Component {

//its from taskitms.js compon
  deleteTasks(id){
    this.props.onDelete(id); //seding it app compon
  }



      constructor(props){
        super(props);
        this.state = {};
        //biding deleteTask function
        this.deleteTasks = this.deleteTasks.bind(this);
      }
  render(){
    // getting tasks obeject and loop trough it
    let taskItem;
    if(this.props.task){
      taskItem = this.props.task.map(tasks => {
        //console.log(tasks);
        //return Taskitems compo
        return <TaskItems key={tasks.task} tasks={tasks}  onDelete={this.deleteTasks} />  //CMNT RETURN
      });
    }

    return(
      <div className="mt-5">
        <h1>All Tasks By Default</h1>
        <div id="margin" className="w-50 p-3" >
          <ul className="list-group" >
              {taskItem}   {/* Calling tasks */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todolist;
