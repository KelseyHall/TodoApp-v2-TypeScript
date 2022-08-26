import React from 'react';
import {
  IconButton,
  Checkbox,
  ListItem,
  List,
  Card,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeToDo, changeStatus } from './functions';
import { Dispatch, SetStateAction } from 'react';
import { Todo } from './types';

const MapTodolist = ({
  toDo,
  setTodo,
}: {
  toDo: Todo[];
  setTodo: Dispatch<SetStateAction<Todo[]>>;
}) => {
  if (toDo.length === 0) {
    return (
      <Typography variant="body1" color="secondary" align="center" mt={3}>
        No todos to show
      </Typography>
    );
  } else {
    return (
      <List>
        {toDo.map(({ id, task, completed }) => (
          <Card variant="outlined" key={id}>
            <ListItem
              key={id}
              secondaryAction={
                <IconButton
                  aria-label="delete"
                  key={id}
                  color="primary"
                  value={id}
                  onClick={() => removeToDo({ id, setTodo })}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  {
                    <Checkbox
                      name={task}
                      checked={completed}
                      onChange={() => changeStatus({ id, setTodo })}
                      inputProps={{
                        'aria-label': task,
                      }}
                      color="secondary"
                    />
                  }
                </span>
                <span id="taskItem">{task} </span>
              </p>
            </ListItem>
          </Card>
        ))}
      </List>
    );
  }
};

export default MapTodolist;
