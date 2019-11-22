import React from 'react';

export const Todo = props => (
    <div style={{ textDecoration: props.complete ? "line-through" : "" }}>
        <input type="checkbox" onChange={props.toggleComplete} />
        {props.text}
        <button onClick={props.onDelete}>Delete</button>
    </div>
);