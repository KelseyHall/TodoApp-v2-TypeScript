import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo, IdSetTodo, ErrorHandler } from './types';

export const removeToDo = ({ id, setTodo }: IdSetTodo) => {
  setTodo((toDo) => toDo.filter((each) => each.id !== id));
};

export const changeStatus = ({ id, setTodo }: IdSetTodo) => {
  setTodo((toDo) =>
    toDo.map((each) => {
      if (each.id === id) {
        return { ...each, completed: !each.completed };
      }
      return each;
    })
  );
};

export const addTodo = (
  e: ChangeEvent<HTMLFormElement>,
  setTodo: Dispatch<SetStateAction<Todo[]>>,
  setError: Dispatch<ErrorHandler>
) => {
  let task = (e.target as HTMLFormElement).newToDo.value.trim();
  e.preventDefault();

  if (task.length > 0) {
    setTodo((todoList: Todo[]) => [
      ...todoList,
      {
        id: uuidv4(),
        task,
        completed: false,
      },
    ]);
    setError({ error: false, message: '' });
    (e.target as HTMLFormElement).newToDo.value = '';
  } else {
    setError({
      error: true,
      message: '*make sure to add value before hitting add',
    });
  }
};
