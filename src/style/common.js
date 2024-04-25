// common : 공통적인 스타일 특성

import { css } from "styled-components"; //styled-components모듈 중 css 변수 가져옴

// css 변수 쓰기
// export로 하나씩 내보내기
export const flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center; //정중앙
    align-items: center;
`
export const textH1 = css`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -0.1px; //자간
`