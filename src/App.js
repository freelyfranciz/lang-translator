import React, { Component } from 'react';
import MainPage from './component/MainPage';
import './App.css';
import LangugageProvider from './component/LanguageProvider';

class App extends Component {
    render() {
        return (
            <LangugageProvider>
                <MainPage />
                <p>--Webstyles.com--</p>
            </LangugageProvider>
        );
    }
}

export default App;