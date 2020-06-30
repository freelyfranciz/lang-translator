import React from 'react';
//import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

import FormattedMssg from './FormattedMssg';


function MainPage({data, lang, handleLangChange}) {
    return (
        <div className="container">
             <FormattedMssg
               data = {data.change}
            />
            <button onClick={() => handleLangChange('en')}>English</button>
            <button onClick={() => handleLangChange('ml')}>Malayalam</button>
            <FormattedMssg
               data = {data.title}
            />
            <FormattedMssg
               data = {data.text}
            />
            <FormattedMssg
               data = {data.person}
            />
        </div>
    )
}

export default MainPage;