import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, ScrollRestoration } from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, CssBaseline } from '@mui/material'
import bumerangTheme from './appTheme'

import { LightgalleryProvider } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const theme = createTheme(bumerangTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "*",
    element: <LightgalleryProvider lightgallerySettings={
      {
        // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
      }
    }
      galleryClassName="my_custom_classname"
    >
      <ScrollRestoration />
      <Paper>
        <App />
      </Paper>
    </LightgalleryProvider>,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "oferta",
    //     element: <App />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}>

      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode >
);
