import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material'

import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#105c6f',
    },
    secondary: {
      main: '#9c27b0',
    },
    text: {
      primary: 'rgba(18,0,0,0.87)',
      hint: '#000000',
      disabled: 'rgba(0,0,0,0.38)',
      secondary: 'rgba(16,16,16,0.6)',
    },
    divider: 'rgba(2,0,0,0.12)',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
