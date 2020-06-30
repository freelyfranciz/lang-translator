import React, { Component } from 'react';
import MainPage from './component/MainPage';
import './App.css';
//import LangugageProvider from './component/LanguageProvider';
import { fetchData } from './component/api';

class App extends Component {
    state = {
        data: {},
        lang: 'en'
    }

    handleLangChange = async (lang) => {
        const fetchedData = await fetchData(lang);
        this.setState({ data: fetchedData, lang: lang });
    }

    async componentDidMount() {
        const dataFetch = await fetchData(this.state.lang);
        this.setState({ data: dataFetch });
    }

    render() {
        return (
            <div>
                <MainPage data={this.state.data} lang={this.state.lang} handleLangChange={this.handleLangChange} />
                <p>--Webstyles.com--</p>
            </div>
        );
    }
}

export default App;