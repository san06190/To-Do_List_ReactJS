import React, { Component } from "react";

class AddTodo extends Component {
    state={
      task:''
    }
   addTodo = (e) => {
       e.preventDefault()
      this.props.onAdd(this.state)
      this.setState({
          task:''
      })
   }
  render() {
    return (
      <div className="row">
        <form className="input-field col s12" onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ task:e.target.value})
            }
            value={this.state.task}
          />
          <label>Enter Task</label>
          <button className="btn waves-effect waves-light" type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
