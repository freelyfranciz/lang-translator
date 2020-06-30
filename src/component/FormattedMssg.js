import React from 'react';
import defineMessages from './DefaultMessages';

function FormattedMssg({data}) {

    return (
        <div>
            {data? data : defineMessages.data}
            <br/>           
        </div>
    );
}



export default FormattedMssg;