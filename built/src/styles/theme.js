"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme = (0, material_1.createTheme)({
    palette: {
        primary: {
            main: '#2B2D42',
            light: '#8D99AE',
            contrastText: '#EDF2F4',
        },
        secondary: {
            main: '#D90429',
            light: '#EF233C',
            contrastText: '#EDF2F4',
        },
        background: {
            default: '#EDF2F4',
        },
    },
});
exports.default = theme;
