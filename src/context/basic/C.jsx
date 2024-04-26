import React from 'react';
import CharContext from '../CharContext';

const C = () => {
    return (
        <div>
            <CharContext.Consumer >
                {
                    (context)=>
                        <p style={{fontSize: context.fontSize}}>리액트 Context 환영해! 🤔</p>
                }
            </CharContext.Consumer>
            
        </div>
    );
};

export default C;