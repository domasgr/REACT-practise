import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import {addTodo, removeTodo} from "./actionCreators"
import {Route} from 'react-router-dom';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props){
    super(props)
      this.state = {
        task: ""
      }
    
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(val){
    this.props.addTodo(val)
  }
  handleRemove(id){
    this.props.removeTodo(id);
    
  }
  render(){
    
    const todos = this.props.todos.map((todo, i) =>(
            <TodoItem removeTodo={
              this.handleRemove.bind(this, todo.id)} 
            
              todo={todo.task}/>
        ))
    
    return (
      <div>
        <Route path='/todos/new' component={props=>(
          <TodoForm {...props} handleSubmit={this.handleAdd}/>
        )}/>
        <Route exact path='/todos' component={() => <div><ul>{todos}</ul></div>}/>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return{
    todos: reduxState.todos,
    id: reduxState.id
  }
}
// function mapDispatchToProps(dispatch){
//   return{
//     addTodo: function(task){
//       dispatch({
//         type: 'ADD_TODO',
//         task
//       });
//     }
//   }
// }
export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);
