import { keyframes } from "styled-components"; 

export const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translate(0, -30px); //좌우, 상하(-는 하=>상 밑에서 올라오는 효과)
    }
    100%{
        opacity: 1;
        transform: translate(0, 0); //원위치로
    }
`