// Context의 consumer
import React from 'react';
import CharContext from '../CharContext';

const C = () => {
    return (
        <div>
            <CharContext.Consumer>
                {/* context provider인 CharContainer의 value값인 fontSize를 받아줌 */}
                {(context) => 
                    <p style={{fontSize : context.fontSize}}>리액트 Context 환영해!👻</p>
                }
            </CharContext.Consumer>      
        </div>
    );
};

export default C;