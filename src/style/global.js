import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        text-shadow: 0px 0px 0px rgba(0,0,0,0.1);
        letter-spacing: 0.2px;
        text-decoration: none;
        color: #131313;
    }
    
    button{
        border: none;
    }
`

export default GlobalStyle;