import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './index.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // State for active filter
  const [editId, setEditId] = useState(null); // State for active edit

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      name: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const delt = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterTodos = () => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    if (filter === 'pending') return todos.filter((todo) => !todo.completed);
    return todos;
  };

  const clearAll = () => {
    setTodos([]);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInput(todoToEdit.name);
    setEditId(id);
  };

  const saveEdit = () => {
    if (input.trim() === '') return;
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, name: input } : todo
    );
    setTodos(updatedTodos);
    setInput('');
    setEditId(null); // Reset edit state
  };

  return (
    <>
      <h1>To-Do App</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter a new task"
          aria-label="Todo input"
          aria-describedby="button-addon2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={editId ? saveEdit : addTodo}
        >
          {editId ? 'Save' : 'Add'}
        </Button>
      </InputGroup>

      <div className="btns">
        <Button variant="primary" onClick={() => setFilter('all')}>
          All Todos
        </Button>
        <Button variant="primary" onClick={() => setFilter('completed')}>
          Completed Todos
        </Button>
        <Button variant="primary" onClick={() => setFilter('pending')}>
          Pending Todos
        </Button>
        <Button variant="primary" onClick={clearAll}>
          Clear All
        </Button>
      </div>

      <ul>
        {filterTodos().map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            {todo.name}
            <Button variant="danger" onClick={() => delt(todo.id)}>
              Delete
            </Button>
            <Button variant="warning" onClick={() => editTodo(todo.id)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
