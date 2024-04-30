import React, { useContext, useState } from 'react';
import { AnimalsContext } from '../AnimalsContext';
import Animal from './Animal';
import useInput from './useInput';

// Context에 저장된 동물 세마리를 버튼으로 출력
// 동물 세마리의 초기 값 "누렁이", "점박이", "야옹이"
// input에 동물을 입력 후 엔터를 치면 동물 버튼을 추가
// 동물 버튼을 클릭하면 해당 버튼을 삭제
// 각 context에 선언된 insert(), delete() 메서드를 사용
// 50분까지

const Animals = () => {
    const {state, actions} = useContext(AnimalsContext);
    // const [value, setValue] = useState("")
    const [input, onChangeInput] = useInput("")

    const styleFlex = {display : "flex"}
    const styleList = {listStyle : "none"}

    // const onChangeInput = (e) => {
    //     setValue(e.target.value)
    // }

    const onKeyUpToAddAnimal = (e) => {
        // console.log(e)
        if(e.key === 'Enter'){
            actions.insert(input);
        }
    }

    return (
        <>
            <input type="text" onChange={onChangeInput} value={input} onKeyUp={onKeyUpToAddAnimal}/>
            <Animal styleFlex={styleFlex} styleList={styleList}/>
        </>
    );
};

export default Animals;