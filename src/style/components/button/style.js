import styled, { css } from "styled-components"

const variantCSS = {
    primary : css`
        background-color: ${({theme})=>theme.PALLETE.background["gray"]};
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

const Button = styled.button`

    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}

    cursor : pointer;
`

export default Button;