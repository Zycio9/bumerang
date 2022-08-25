import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, CssBaseline } from '@mui/material'
import bumerangTheme from './appTheme'
const theme = createTheme(bumerangTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Paper>
          <App />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode >
);
