import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../redux/modules/count';

const FontButtonComponent = () => {
    // 재미있는 리덕스 수업
    // 기본 글자 크기가 1rem
    // 버튼을 눌렀을 때 redux를 이용해서 3rem으로 변경
    // FontButtonComponent로 만들기a

    const fontSize = useSelector((state) => state.fontSize)
    const dispatch = useDispatch();

    return (
        
        <div>
            <h1 style={{fontSize : fontSize}}>재미있는 리덕스 수업 {fontSize}</h1>
            <div>
                <button onClick={() => {dispatch(increase())}}>3rem 사이즈로 커지는 버튼</button>
            </div>
        </div>
    );
};

export default FontButtonComponent;