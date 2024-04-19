import React, { useRef } from 'react';
import Form from './Form';

// 실습😎 : 유효성 검사 form컴포넌트와 분리하기
const CheckInput = () => {

    const style = {
        display : "flex",
        flexDirection : "column",
        width : "200px"
    }
    
    const inputsRef = useRef([]);
    const formRef = useRef();
    const onClickInputValue = () => {
        for(let input of inputsRef.current){
                if(!input.value){
                    console.log(input.name + " error")
                    return
                }
        }
        // 🌟유효성 검사 통과 시, form태그의 submit 기능 넣기
        formRef.current.submit()
    }
    
    return (
        <div>
            <Form style={style} inputsRef={inputsRef} formRef={formRef} onClickInputValue={onClickInputValue}/>
        </div>
    );
};

export default CheckInput;