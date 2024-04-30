// context api = 전역변수의 역할과 비슷
// react의 내장 api여서 react import
import React from 'react'; 

// createContext메서드
// context에 여러 값들이 들어가므로 객체형태
const CharContext = React.createContext({}); 

export default CharContext;