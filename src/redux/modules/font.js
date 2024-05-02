import { createAction, handleActions } from "redux-actions";

const INCREASE = " font/INCREASE";
const INPUTBIGGER = "font/INPUTBIGGER";

export const increase = createAction(INCREASE);
export const inputBigger = createAction(INPUTBIGGER, (fontSize) => fontSize);

const initialState = {
    fontSize : "1rem"
}


const font = handleActions({
    [INCREASE] : (state, action) => ({fontSize : "3rem"}),
    [INPUTBIGGER] : (state, action) => ({fontSize  : action.payload}),
},initialState)


export default font;