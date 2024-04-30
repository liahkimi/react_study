// fontawesome icon 사용하는 방법

import { faBirthdayCake, faKiwiBird, faPoo, faUser, faVolcano } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// https://fontawesome.com/search?s=solid&f=classic&o=r
const FontAwesome = () => {
    const style ={
        //fontawesome은 글자(font)로 인식되는 글자인데 icon처럼 쓰는 것!
        color : "red",
        fontSize:"30px"
    }
    return (
        <div>
           <FontAwesomeIcon icon={faUser} style={style} /> 
           {/* camel표기법과 중괄호{} 사용할 것! */}
           {/* 사이트에서 icon을 고르고, FontAwesomeIcon과 faUser을 import 한다. */}
           <FontAwesomeIcon icon={faPoo} style={style}/>
           <FontAwesomeIcon icon={faKiwiBird} style={style}/>
           <FontAwesomeIcon icon={faVolcano} style={style}/>
        </div>
    );
};

export default FontAwesome;