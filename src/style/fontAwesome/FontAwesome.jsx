import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

// https://fontawesome.com/search?s=solid&f=classic&o=r
const FontAwesome = () => {
    const style ={
        color: "red",
        fontSize:"30px"
    }
    return (
        <div>
            <FontAwesomeIcon icon={faUser} style={style} />
            <FontAwesome icont={faPoo}/>
        </div>
    );
};

export default FontAwesome;