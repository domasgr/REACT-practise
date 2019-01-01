import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props){
    super(props)
      this.state = {
        task: ""
      }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    
  }
  handleSubmit(e){
    
    //debugger;
    e.preventDefault();
    this.props.dispatch({
      type: 'ADD_TODO',
      task: this.state.task
    })
    this.setState(
      {task: ""}
    )
    //e.target.reset();
      //debugger;
    
  }
  handleChange(e){
    this.setState({
      task: [e.target.value]
    })
  }
  handleRemove(id){
    this.props.dispatch({
      type: 'REMOVE_TODO',
      id
    })
    
  }
  render(){
    const todos = this.props.todos.map((todo, i) =>(
            <TodoItem removeTodo={
              this.handleRemove.bind(this, todo.id)} 
            
              todo={todo.task}/>
        ))
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.task} name='task' onChange={this.handleChange}/>
            <button>Add</button>
        </form>
        <ul>
          
          {todos}
        </ul>
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

export default connect(mapStateToProps)(TodoList);
