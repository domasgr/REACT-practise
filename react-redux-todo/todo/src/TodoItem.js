import React, { Component } from 'react';

const TodoItem =(props) =>(
    <div>
    <li key={props.key}>{props.todo}</li>
    <button
    onClick={props.removeTodo}
    >X</button>
    </div>
)

export default TodoItem;