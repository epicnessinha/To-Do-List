import React, { useState } from 'react';
import TodoForm from './TodoFom'
import TodoItem from './TodoItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
