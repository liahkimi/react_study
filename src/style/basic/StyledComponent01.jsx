import React from 'react';
import S from '../style'; //<S> 입력시 자동생성
// import styled from 'styled-components'; //styled 입력시 자동생성
// import Styledd from './Styledd';

const StyledComponent01 = () => {
    return (
        <div>
            <S.Styled color={"blue"}>
                스타일된 컴포넌트입니다.😎
                <input />
                <button><p>입력</p></button>
            </S.Styled>
            {/* <Styledd /> <= 어떤게 style컴포넌트인지 혼동이 오므로, S.를 붙임*/}


            {/*실습😎: styled input을 만들어서 background 컬러를 props로 pink를 받기 5분 */}         
            <S.input color={"pink"}></S.input>
            <ul>
                <li>글로벌 스타일 잘 들어갔어요?</li>
            </ul>
            <S.Button >스타일된 버튼입니다.😁</S.Button>
        </div>
    );
};

export default StyledComponent01;