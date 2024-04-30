// context의 상태관리
import React, { createContext, useState } from 'react';

// context api 초기화 컴포넌트
export const FontSizeContext = createContext({
    state : {fontSize : ""},
    action : {setFontSize : () => {} } 
    // 하위 콤포넌트에서 전역 상태를 변하게 하고 싶다면 action을 사용 (onClick event에 사용)
})

// FontSizeContext.Provider 컴포넌트
// - FontSizeProvider 컴포넌트로 감싸지는 자식요소를 children으로 받고,
// - FontSizeContext.Provider 컴포넌트가 감싸주는 컴포넌트 생성.
// 폰트 사이즈 변경 => 폰트 상태 변경
const FontSizeProvider = ({children}) => {
    // 초기값 3rem
    const [fontSize, setFontSize] = useState("3rem")
    const value = {
        state : {fontSize}, 
        action : {setFontSize} 
    }
    return (
        // provider의 value : 전역에서 사용 될 값
        <FontSizeContext.Provider value={value}>
            {children}
            {/* children : 상위 컴포넌트에서 쓰일 내용이 들어 올 자리*/}
        </FontSizeContext.Provider>
    )

}

// FontSizeContext.Consumer 컴포넌트
const FontSizeConsumer = FontSizeContext.Consumer;

// 컴포넌트들 export
export {FontSizeProvider, FontSizeConsumer}