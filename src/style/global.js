import { createGlobalStyle } from 'styled-components' 
// createGlobalStyle 입력시 자동 import 안될 때 : 
// import s from 'styled-components'로 모듈 먼저 접근한 뒤 , {createGlobalStyle} 추가해주기
// 중괄호는 styled-components모듈 안의 많은 것들 중 하나만 가져오므로 비구조화할당 쓴것!
import reset from 'styled-reset' //import r from 'styled-reset'먼저 입력하면 import됨
// styled-reset에는 reset변수 하나임

// GlobalStyle 컴포넌트
// 무조건 들어가야 하는 스타일 => reset 할 때 많이 사용 (불필요한 것: list의 .)
const GlobalStyle = createGlobalStyle`
    ${reset}
    // ❓적용된건지 모르겠어요 ㅠ
    * {
        box-sizing: border-box;
        text-shadow: 0px 0px 0px rgba(0,0,0,0.1);
        letter-spacing: 0.2px;
        text-decoration: none;
        color: #131313;
    }

    button {
        border : none;
    }
`

export default GlobalStyle;