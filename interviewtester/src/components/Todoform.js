import React, { Component }  from 'react';
import uuid from 'uuid';


// TodoList Component
class Todoform extends Component {
  constructor(props){
    super(props);
    this.state = {
      //setting an new task with an empty objects
      newTask: {}
    };
    // biding submit function methode
    this.handleSubmit = this.handleSubmit.bind(this);
  }

      // perfoming for submission
      handleSubmit(event) {
        event.preventDefault();
            if(this.refs.title.value === ''){ //checking if the input field is equal to empty
              alert("Please Enter a Task");
            } else {
              //console.log("i was submitted");
                this.setState({newTask: {
                id: uuid.v4(),
                task: this.refs.title.value
              }}, function(){ //<= callback function
                //console.log(this.state);
                this.props.addTask(this.state.newTask);  //sending value to state newTask app.js
              });
            }
      }

  render(){
    return(
      <div className="mt-5">
        <h1>Manager All Tasks</h1>
          <div id="margin" className="w-50 p-3">
            <form  onSubmit={this.handleSubmit} > {/*its been binding in the state */}
              <div className="form-group">
                  <input type="text" ref="title" className="form-control" placeholder="Add a Task"  />
              </div>
              <button type="submit"  className="btn btn-dark btn-block" >Submit</button>
            </form>
          </div>
      </div>
    );
  }
}



export default Todoform;
