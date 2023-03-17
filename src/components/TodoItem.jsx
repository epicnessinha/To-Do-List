import React from 'react';
import { Button } from 'reactstrap';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <Button color="" onClick={() => removeTodo(index)}>
      <h5 className='check'> ✓ </h5>
        </Button>
    </div>
  );
};

export default TodoItem;

