// styled : 
// - styled는 'styled-componenets'라이브러리의 함수
// - css-in-js구문으로 컴포넌트를 스타일링하는데 쓰임.(js파일이므로 소문자로 시작)
// - 장점 : js여서 동적으로 style을 줄 수 있고, 반복되는 코드들을 외부에 선언해 놓고 모듈로 가져 올 수 있음.
// styled.div = styled함수를 사용하여 스타일이 적용된 div컴포넌트가 생성된다.

import styled from "styled-components";
import { flexCenterColumn } from "./common";
const S = {} //❓S객체의 존재를 잘 이해 못하겠음.

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