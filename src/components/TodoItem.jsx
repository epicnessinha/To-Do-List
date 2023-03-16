import React from 'react';
import { Button } from 'reactstrap';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <Button color="success" onClick={() => removeTodo(index)}>
      ✓
        </Button>
    </div>
  );
};

export default TodoItem;

