import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, CssBaseline } from '@mui/material'
import bumerangTheme from './appTheme'

import { LightgalleryProvider } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const theme = createTheme(bumerangTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LightgalleryProvider lightgallerySettings={
          {
            // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
          }
        }
          galleryClassName="my_custom_classname"
        >
          <Paper>
            <App />
          </Paper>
        </LightgalleryProvider >
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode >
);
