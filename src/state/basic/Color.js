import React, { useState } from 'react';

// 😎실습
// 1.입력창에 글자 입력시 그 글자 화면에 띄우기
// 2.빨간색 버튼을 누르면 글자색을 빨갛게 
// 3.파란색 버튼을 누르면 글자색을 파랗게 
// 4.입력창에 '핑크색'이란 문구를 입력하면 글자색을 검은색으로 초기화시키기

const Color = () => {

    // 문구 내용에 대한 상태 변경
    const [result, setResult ] = useState("")
    // 문구 색깔에 대한 상태 변경
    const [color, setColor] = useState("")

    // 1.입력창에 글자 입력시 그 글자 화면에 띄우기
    const onResult = (e) =>{
        let value = e.target.value;
        // 4.입력창에 '핑크색'이란 문구를 입력하면 글자색을 검은색으로 초기화시키기
        if(value === "핑크색"){
            setColor("")
        }
        setResult(value);
        return; //Return : 이 함수를 끝내는 의미
    }

    // 2.빨간색 버튼을 누르면 글자색을 빨갛게 
    const colorRed = (e) =>{
        setColor("red")
    }
    // 3.파란색 버튼을 누르면 글자색을 파랗게 
    const colorBlue = (e) =>{
        setColor("blue")
    }


    return (
        <div>
            {/* style={{color}}인 이유 : 
                JSX에서 JavaScript 표현식(style)은 중괄호 안에 작성되며 
                JavaScript 객체도 중괄호를 사용하므로 두개의 중괄호 안에 작성된다.*/}
            <p style={{color}}>{result}</p>
            <input onChange={onResult} type="text"/>
            <button onClick={colorRed}>빨간색</button>
            <button onClick={colorBlue}>파란색</button>
        </div>
    );
};

export default Color;