import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../translations/en.json';
import Malayalam from '../translations/ml.json';
import defineMessages from './DefaultMessages';
import { FormattedMessage } from 'react-intl';


export default function LanguageProvider(props) {
    const [locale, setLocale] = useState('en');
    const [lang, setLang] = useState(English);

    const changeLang = (getLang) => {
        setLocale(getLang);
        switch(getLang) {
            case 'en' : setLang(English); break;
            case 'ml' : setLang(Malayalam); break;
            default : setLang(English);
        }

    }

    return (
        <IntlProvider locale={locale} messages={lang}>
            <FormattedMessage
                id="change"
                defaultMessage={defineMessages.change}
            />
            <br />
            <button onClick={() => changeLang('en')}>English</button>
            <button onClick={() => changeLang('ml')}>Malayalm</button>
            <br />
            <div>{props.children}</div>
        </IntlProvider>
    );
}