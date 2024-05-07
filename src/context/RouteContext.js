import { createContext } from "react";

const RouteContext = createContext({
    table : {},
})

const value = {
    table : {
        margin : "30px auto",
        width : "300px",
        textAlign : "center",
        border : "1px solid black"
    }
}

const RouteProvider = ({children}) => {
    return (
        <RouteContext.Provider value={value}>
           {children}
        </RouteContext.Provider>
    )
}

export { RouteContext, RouteProvider} 