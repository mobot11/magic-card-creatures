import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import HomeHooks from './pages/HomeHooks';
import { CardProvider } from './contexts/CardContext';
import './App.css';
import 'typeface-roboto';

const App = () => (
    <CardProvider>
        <CssBaseline />
        <HomeHooks />
        {/* <Home /> */}
    </CardProvider>
);

export default App;
