import React, { Component } from 'react';

const TodoItem =(props) =>(
    <div>
    <li key={props.key}>{props.todo}
    <button
    onClick={props.removeTodo}
    >X</button>
    </li>
    
    </div>
)

export default TodoItem;