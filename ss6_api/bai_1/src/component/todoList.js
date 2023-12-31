import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createTodo, getListTodo } from '../service/todoService';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const getList = async () => {
            const data = await getListTodo();
            setTodos(data);
        }
        getList();
    }, []);

    const handleNewTodoChange = event => {
        setNewTodo(event.target.value);
    }


    const handleNewTodoSubmit = async () => {
        await createTodo({ name: newTodo })
            .then(response => {
                alert('Task added successfully');
                setTodos([...todos, response.data]);
                setNewTodo('');
            })
            .catch(error => {
                alert('Failed to add task');
            });
    }

    return (
        <>
            <h1>Todo List</h1>
            {console.log(todos)}
            <form onSubmit={handleNewTodoSubmit}>
                <input type="text" onChange={handleNewTodoChange} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {todos.map((todo, item) => (
                    <li key={item}>
                        name={todo.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;