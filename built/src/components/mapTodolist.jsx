"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const functions_1 = require("./functions");
const MapTodolist = ({ toDo, setTodo, }) => {
    if (toDo.length === 0) {
        return (<material_1.Typography variant="body1" color="secondary" align="center" mt={3}>
        No todos to show
      </material_1.Typography>);
    }
    else {
        return (<material_1.List>
        {toDo.map(({ id, task, completed }) => (<material_1.Card variant="outlined" key={id}>
            <material_1.ListItem key={id} secondaryAction={<material_1.IconButton aria-label="delete" key={id} color="primary" value={id} onClick={() => (0, functions_1.removeToDo)({ id, setTodo })}>
                  <Delete_1.default />
                </material_1.IconButton>}>
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  {<material_1.Checkbox name={task} checked={completed} onChange={() => (0, functions_1.changeStatus)({ id, setTodo })} inputProps={{
                        'aria-label': task,
                    }} color="secondary"/>}
                </span>
                <span id="taskItem">{task} </span>
              </p>
            </material_1.ListItem>
          </material_1.Card>))}
      </material_1.List>);
    }
};
exports.default = MapTodolist;
