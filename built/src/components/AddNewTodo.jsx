"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("./functions");
const material_1 = require("@mui/material");
const AddNewTodo = ({ setTodo, }) => {
    const [error, setError] = (0, react_1.useState)({
        error: false,
        message: '',
    });
    return (<div>
      <form id="input-todo" onSubmit={(e) => (0, functions_1.addTodo)(e, setTodo, setError)}>
        <material_1.TextField fullWidth error={error.error} id="standard-basic" label="Add New todo" variant="filled" name="newToDo" color="primary" margin="normal" helperText={error.message}/>

        <material_1.Button fullWidth size="small" variant="contained" color="primary" type="submit">
          Add
        </material_1.Button>
      </form>
    </div>);
};
exports.default = AddNewTodo;
