import React, { useState } from 'react';
import shortID from 'shortid';

export const TodoForm = props => {

    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({ text, complete: false, id: shortID.generate()});
        setText('');        
    };

    return (
        <form onSubmit={handleSubmit} >
            <input placeholder="TODO..."
                    value={text} 
                    onChange={handleChange} 
                    name="Text" 
            />
            <button onClick={handleSubmit} >Save Task</button>
        </form>
    )
};