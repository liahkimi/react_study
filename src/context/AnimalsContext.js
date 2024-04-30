import React, { createContext, useState } from 'react';

// context 생성 및 초기화
const AnimalsContext = createContext({
    state : {animals : []},
    actions : {insert : () => {}, remove : () => {}}
})

// Provider 생성
const AnimalsProvider = ({children}) => {
    // "누렁이", "점박이", "야옹이"
    const [animals, setAnimals] = useState(["누렁이", "점박이", "야옹이"]);
    // 
    const insert = (animal) => {
        setAnimals(animals.concat(animal))
    }
    const remove = (index) => {
        setAnimals(animals.filter((animals, i)=> index !== i))
    }

    const value = {
        state : {animals : animals},
        actions : {insert: insert, remove: remove}    
    }

    return (
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )
}

export {AnimalsProvider, AnimalsContext}



// Consumer 생성