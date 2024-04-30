import React, { useContext } from 'react';
import { AnimalsContext } from '../AnimalsContext';

const Animal = ({styleFlex, styleList}) => { 
    const {state, actions}= useContext(AnimalsContext);
    const AnimalLists = state.animals.map((animal, i) => (
        <li key={i} style={styleList}>
            <button onClick={() => actions.remove(i)}>{animal}</button>
        </li>
    ))

    return (
        <ul style={styleFlex}>
            {AnimalLists}
        </ul>
    );
};

export default Animal;