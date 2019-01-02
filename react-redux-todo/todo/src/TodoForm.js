import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props)
            this.state = {
            task: ""
            }
    
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
    
    //debugger;
    e.preventDefault();
    if(this.state.task !== ""){
    this.props.handleSubmit(this.state.task)
    }
    this.setState(
      {task: ""}
    )
    this.props.history.push('/todos');
    //e.target.reset();
      //debugger;
    
  }
  handleChange(e){
    this.setState({
      task: [e.target.value]
    })
  }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input 
            type='text' 
            value={this.state.task} 
            name='task' 
            onChange={this.handleChange}/>
            <button>Add</button>
            </form>
            )
    }
    
}
export default TodoForm;