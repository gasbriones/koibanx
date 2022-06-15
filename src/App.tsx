import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import { DataProvider } from './providers/useData';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} caseSensitive />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
