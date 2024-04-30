import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeContext, FontSizeProvider } from '../FontSizeContext'; 
// ⭐FontSizeContext, FontSizeProvider 둘 다 import 해주기

const ParentContainer = () => {
    return (
        <div>
            {/* context 제공 */}
            {/* 기존 : <FontSizeContext.Provider></FontSizeContext.Provider> */}
            <FontSizeProvider>
                <ChildContainer />
            </FontSizeProvider>
        </div>
    );
};

export default ParentContainer;