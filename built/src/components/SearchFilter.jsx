"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { searchTodo } from './functions';
const material_1 = require("@mui/material");
// import MapTodolist from './mapTodolist';
const SearchFiltering = ({ value, setValue, }) => {
    return (<material_1.TextField id="standard-basic" label="Search todos" variant="standard" name="searchTodo" value={value} onChange={(e) => setValue(e.target.value)}/>);
};
exports.default = SearchFiltering;
