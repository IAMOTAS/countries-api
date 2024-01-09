import React from 'react'; // Import React
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import { lightTheme, darkTheme } from './components/Theme';
import { useState } from 'react';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [themeSwitch, setThemeSwitch] = useState(true);

  return (
    <>
      <ThemeProvider theme={themeSwitch ? lightTheme : darkTheme}>
        <CssBaseline />
        <Header themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countrydetails/:id' element={<CountryDetails />} />
        </Routes>
        <Toaster/>
      </ThemeProvider>
    </>
  );
}

export default App;