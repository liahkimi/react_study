import styled from "styled-components";
import { flexCenterColumn } from "./common";

const S = {}

S.Styled = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #333;
    background-color: ${(props) => props.color};
    ${flexCenterColumn};

    /* & 자기 자신 선택자 */
    & input {
        background:#333;
    }
    & button{
        background: pink;
        & p {
            color: red;
        }
    }
`


S.Button = styled.button`
    background-color: orchid;
    border: none;
    ${flexCenterColumn}
`
S.input = styled.input `
    width: 100px;
    height: 10px;
    border: solid 1px #333;
    background-color: ${(props)=> props.color};
`

export default S;