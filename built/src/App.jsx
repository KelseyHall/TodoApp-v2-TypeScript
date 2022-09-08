"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const DisplayTodoList_1 = __importDefault(require("./components/DisplayTodoList"));
function App() {
    return (<div className="App">
      <material_1.AppBar position="sticky">
        <material_1.Typography variant="h2" align="center">
          Todo App
        </material_1.Typography>
      </material_1.AppBar>
      <material_1.Container>
        <DisplayTodoList_1.default />
      </material_1.Container>
    </div>);
}
exports.default = App;
