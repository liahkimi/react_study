// BasicButton에 관련된 스타일 파일
import styled, { css } from "styled-components"

const variantCSS = {
    primary : css`
        background-color: ${({theme})=>theme.PALETTE.primary["main"]};
    `
}

const shapeCSS = {

    default: css``,
    small: css`
        border-bottom: 10px;
    `,
    large: css`
        border-bottom: 20px;
    `,
    big: css`
        border-bottom: 30px;
    `,
    round: css`
        border-radius: 50%;
    `
}

// 사이즈에 대한 css 선언
const sizeCSS = {

    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,

    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 16px 0;
`,
}
// styled이 적용된 버튼
const Button = styled.button`

    ${({variant}) => variantCSS[variant]} //입력한 인자들이 객체의 key값으로 들어옴
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]} //${({smal}) => sizeCSS[smal]}

    cursor : pointer;
`

export default Button;