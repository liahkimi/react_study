// styled 컴포넌트 언어 사용 이유 : 
// - 실제적으론 컴포넌트 아님. js코드 갖다 쓰는 것 (파일명 소문자로 시작 이유)
// - javascript 언어 이므로, 동적으로 style을 줄 수 있고, 
// - 반복되는 코드들을 외부에 선언해 놓고 모듈로 가져 올 수 있는 장점이 있어서.

import styled from "styled-components";
import { flexCenterColumn } from "./common";
const S = {}

S.Styled = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #333;
    background-color: ${(props) => props.color}; //{props.color}로 받게 되면 return이 없어 반환 안되어 적용 안됨
    ${flexCenterColumn} //공통 변수(common.js의 flexCenterColumn변수) 쓰기

    /* & 자기 자신 선택자 (자가 선택자) */
    & input {
        background: #333;
    }

    & button {
        background-color: pink;

        & p {
            color: red;
        }
    }
`
S.Button = styled.button`
    background-color: orchid;
    border: none;
    ${flexCenterColumn};
    font-size: ${({theme})=>theme.FONT_SIZE["h1"]};
`

S.input = styled.input`
    background-color: ${(props)=>props.color};
    ${flexCenterColumn};
`
export default S;