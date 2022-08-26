import { Dispatch, SetStateAction } from 'react';

export type Todo = {
  id: string;
  completed: boolean;
  task: string;
};

export type ErrorHandler = {
  error: boolean;
  message: string;
};
export interface IdSetTodo {
  id: string;
  setTodo: Dispatch<SetStateAction<Todo[]>>;
}
