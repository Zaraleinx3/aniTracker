import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import MovieModal from './components/modals/MovieInfoModal';
import SeriesModal from './components/modals/SeriesInfoModal';
import movieSeriesList from './components/MovieSeriesList';

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter forceRefresh={true}>
        <Navbar content={
          <span>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/list/:listName" component={movieSeriesList} />
          </span>
        } />
      </BrowserRouter>
      <MovieModal />
      <SeriesModal />

      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
