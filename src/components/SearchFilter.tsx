// import { searchTodo } from './functions';
import { TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
// import MapTodolist from './mapTodolist';

const SearchFiltering = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <TextField
      id="standard-basic"
      label="Search todos"
      variant="standard"
      name="searchTodo"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchFiltering;
