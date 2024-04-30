import React from 'react';
import C from './C';
import CharContext from '../CharContext';

const B = () => {
    return (
        <div>
            <CharContext.Consumer>
            {/* <CharContext.Consumer> 태그 안에서 다른 컴포넌트를 직접 렌더링할 수 없다.
            대신 함수형 컴포넌트나 JSX 요소를 반환하는 함수를 전달해야 한다. */}
                {
                    (context) => <p style={{fontSize : context.fontSize}}>여기는 B에서 제공 받고 있는 Consumer!</p>
                }
            </CharContext.Consumer>
            <C />
        </div>
    );
};

export default B;