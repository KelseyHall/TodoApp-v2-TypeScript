"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const mapTodolist_1 = __importDefault(require("./mapTodolist"));
const AddNewTodo_1 = __importDefault(require("./AddNewTodo"));
const SearchFilter_1 = __importDefault(require("./SearchFilter"));
const DisplayTodoList = () => {
    const [value, setValue] = (0, react_1.useState)('');
    const [toDo, setTodo] = (0, react_1.useState)(() => {
        const getSavedTodos = localStorage.getItem('todoList');
        if (getSavedTodos) {
            return JSON.parse(getSavedTodos);
        }
        else {
            return [];
        }
    });
    (0, react_1.useEffect)(() => {
        localStorage.setItem('todoList', JSON.stringify(toDo));
    }, [toDo]);
    const completedAmount = toDo.filter((todo) => todo.completed).length;
    const filterTodo = () => {
        const findTodo = toDo.filter((todo) => todo.task.includes(value));
        if (value.trim().length === 0) {
            return toDo;
        }
        else {
            return findTodo;
        }
    };
    const taskStatement = () => {
        if (toDo.length === 0) {
            return 'no';
        }
        else {
            return completedAmount === toDo.length
                ? 'All'
                : `${completedAmount} out of ${toDo.length}`;
        }
    };
    return (<div>
      <AddNewTodo_1.default setTodo={setTodo}/>
      <material_1.Typography variant="subtitle1" align="center" sx={{ margin: '15px 0' }}>
        You have completed{' '}
        <span style={{ fontWeight: 'bold' }}>{taskStatement()}</span> todos
      </material_1.Typography>

      <material_1.Container disableGutters sx={[
            {
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
            },
            (theme) => ({
                [theme.breakpoints.only('xs')]: {
                    flexDirection: 'Column',
                    alignItems: 'stretch',
                },
            }),
        ]}>
        <SearchFilter_1.default value={value} setValue={setValue}/>

        <material_1.Typography variant="body2" sx={[
            { marginBottom: 'none' },
            (theme) => ({
                [theme.breakpoints.only('xs')]: {
                    marginTop: '20px',
                },
            }),
        ]}>
          Check completed:
        </material_1.Typography>
      </material_1.Container>
      <mapTodolist_1.default toDo={filterTodo()} setTodo={setTodo}/>
    </div>);
};
exports.default = DisplayTodoList;
