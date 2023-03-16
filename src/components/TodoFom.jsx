import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task"
        />
      </FormGroup>
      <Button color="primary">Add</Button>
    </Form>
  );
};

export default TodoForm;
