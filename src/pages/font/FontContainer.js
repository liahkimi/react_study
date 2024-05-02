import React from 'react';
import FontInputComponent from './FontInputComponent';
import FontButtonComponent from './FontButtonComponent';

const FontContainer = () => {
    // 재미있는 리덕스 수업
    // 기본 글자 크기가 1rem
    // 버튼을 눌렀을 때 redux를 이용해서 3rem으로 변경
    // FontButtonComponent로 만들기
    
    return (
        <div>
            <FontButtonComponent />
            <FontInputComponent />
        </div>
    );
};

export default FontContainer;