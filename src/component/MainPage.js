import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defineMessages from './DefaultMessages';


function MainPage() {
    return (
        <div className="container">
            <FormattedMessage
                id="title"
                defaultMessage={defineMessages.title}
            />
            <br />
            <FormattedMessage
                id="text"
                defaultMessage={defineMessages.text}
            />
        </div>
    )
}

export default MainPage;