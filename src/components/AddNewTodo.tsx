import { useState } from 'react';
import { addTodo } from './functions';
import { TextField, Button } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Todo, ErrorHandler } from './types';

const AddNewTodo = ({
  setTodo,
}: {
  setTodo: Dispatch<SetStateAction<Todo[]>>;
}) => {
  const [error, setError] = useState<ErrorHandler>({
    error: false,
    message: '',
  });
  return (
    <div>
      <form
        id="input-todo"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
          addTodo(e, setTodo, setError)
        }
      >
        <TextField
          fullWidth
          error={error.error}
          id="standard-basic"
          label="Add New todo"
          variant="filled"
          name="newToDo"
          color="primary"
          margin="normal"
          helperText={error.message}
        />

        <Button
          fullWidth
          size="small"
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
};
export default AddNewTodo;
