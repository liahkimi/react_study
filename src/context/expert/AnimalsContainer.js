import React from 'react';
import Animals from './Animals';
import {  AnimalsProvider } from '../AnimalsContext';

const AnimalsContainer = () => {
    // Provider로 Context를 제공해야한다.
    return (
        <div>
            <AnimalsProvider>
                <Animals />
            </AnimalsProvider>
        </div>
    );
};

export default AnimalsContainer;