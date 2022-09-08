"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const react_2 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const theme_1 = __importDefault(require("./styles/theme"));
const App_1 = __importDefault(require("./App"));
const material_1 = require("@mui/material");
react_dom_1.default.render(<react_2.default.StrictMode>
    <react_1.ThemeProvider theme={theme_1.default}>
      <material_1.CssBaseline />
      <App_1.default />
    </react_1.ThemeProvider>
  </react_2.default.StrictMode>, document.getElementById('root'));
