"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = exports.changeStatus = exports.removeToDo = void 0;
const uuid_1 = require("uuid");
const removeToDo = ({ id, setTodo }) => {
    setTodo((toDo) => toDo.filter((each) => each.id !== id));
};
exports.removeToDo = removeToDo;
const changeStatus = ({ id, setTodo }) => {
    setTodo((toDo) => toDo.map((each) => {
        if (each.id === id) {
            return Object.assign(Object.assign({}, each), { completed: !each.completed });
        }
        return each;
    }));
};
exports.changeStatus = changeStatus;
const addTodo = (e, setTodo, setError) => {
    let task = e.target.newToDo.value.trim();
    e.preventDefault();
    if (task.length > 0) {
        setTodo((todoList) => [
            ...todoList,
            {
                id: (0, uuid_1.v4)(),
                task,
                completed: false,
            },
        ]);
        setError({ error: false, message: '' });
        e.target.newToDo.value = '';
    }
    else {
        setError({
            error: true,
            message: '*make sure to add value before hitting add',
        });
    }
};
exports.addTodo = addTodo;
