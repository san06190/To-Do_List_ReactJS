import { Component } from "react"
import AddTodo from "./AddTodo";
import Todos from "./Todos"
class App extends Component{
  state=
  {
    todos:[
      {id:1 , task:'Buy a Comic'},
      {id:2 , task:'Complete the College Assignment'}
    ]
 }
 deletetask = (id) => {
   const todos = this.state.todos.filter(todo => {
     return todo.id !== id
   });
   this.setState({
     todos:todos
   })
 }
 addtask = (todo) => {
   todo.id=Math.random();
   let updatedTodos = [...this.state.todos,todo]
   this.setState({
     todos:updatedTodos
   })
 }
  render(){
    return (
      <div className="container">
      <h1 className="center teal-text text-lighten-2">Todo's List</h1>
      <AddTodo onAdd={this.addtask}/>
      <Todos todos={this.state.todos} deletetask={this.deletetask}/>    
      </div>
    )
  }
}
export default App;