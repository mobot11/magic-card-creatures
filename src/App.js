import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import 'typeface-roboto';

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <Header />
        <Home />
    </React.Fragment>
);

export default App;
