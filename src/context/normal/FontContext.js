import React, { createContext, useState } from 'react';

// export const FontSizeContext = createContext({
//     fontSize : "5rem",
//     color: "blue"
// })

// 초기화 - 
 export const FontSizeContext = createContext({
    state : {fontSize: ""},
    action : {setFontSize : () =>{}}
})

// FontSizeContext.Provider
// FontSizeProvider로 감싸지는 자식요소를 children으로 받고
// FontSizeContext.Provider 감싸주는 컴포넌트 생성
const FontSizeProvider = ({children}) => {
    const [fontSize, setFontSize] = useState("3rem")
    const value = {
        state: {fontSize},
        action: {setFontSize}
    }
    return (
        <FontSizeContext.FontSizeProvider value={value}>
            {children}
        </FontSizeContext.FontSizeProvider>
    )
}

const FontSizeConsumer = FontSizeContext.Consumer;

export { FontSizeProvider, FontSizeConsumer}