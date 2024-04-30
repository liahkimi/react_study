// context의 provider
import React from 'react';
import A from './A';
import CharContext from '../CharContext';

const CharContainer = () => {
    const name = "김가은";
    return (
        <div>
            {/* CharContext.Provider로 감싸주기 */}
            {/* value : 모든 하위 컴포넌트에서 사용 가능한 값 */}
            <CharContext.Provider value={{fontSize : "2rem"}}>
                <A />
            </CharContext.Provider>
        </div>
    );
};

export default CharContainer;