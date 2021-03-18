import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { ThemeProvider } from "@material-ui/styles";
import {
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
}});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter forceRefresh={true}>
        <Navbar content={
          <span>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
          </span>
        } />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
