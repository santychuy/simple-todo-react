import React, { useState } from 'react';

import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export const TodoList = props => {

    const [todos, setTodos] = useState([]);
    const [todosToShow, setTodosToShow] = useState('All');

    const addTodo = todo => {
        setTodos([todo, ...todos]);
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }else{
                return todo;
            }
        }))
    };

    const toggleDelete = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    //Filter
    let todosFilter = [];
    if (todosToShow === 'All') {
        todosFilter = todos;
    }else if (todosToShow === 'Active') {
        todosFilter = todos.filter(todo => !todo.complete);
    }else {
        todosFilter = todos.filter(todo => todo.complete);
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            { todosFilter.map( todo => (
                <Todo key={todo.id} text={todo.text} toggleComplete={() => toggleComplete(todo.id)} onDelete={() => toggleDelete(todo.id)} complete={todo.complete} /> //Para que a la hora que le pasemos un argumento, no se ejecute la función y tire error
            )) }
                {/* Check that .filter function */}
            <div>Active TODOs: {todos.filter(todo => !todo.complete).length}</div>

            <div>
                <button onClick={() => setTodosToShow('All')} >All</button>
                <button onClick={() => setTodosToShow('Active')} >Active</button>
                <button onClick={() => setTodosToShow('Complete')} >Complete</button>
            </div>
            <div>
                <button>Complete All</button>
            </div>
        </div>
    )

}