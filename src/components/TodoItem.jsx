import React from 'react';
import { Button } from 'reactstrap';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <Button color="danger" onClick={() => removeTodo(index)}>
        X
        </Button>
    </div>
  );
};

export default TodoItem;

