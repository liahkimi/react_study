import React, { useState } from 'react';// useState() 모듈 임포트 하기

const Count = () => {
    // useState(상태관리 함수)
    // number : 변수이름 / setNumber : number의 상태를 바꿀수있는 setter 메서드
    // [변수, 상태변화를 위한 setter메서드] = useState('초기값')
    const [number, setNumber] = useState(0)

    // js방식 (직접 접근)
    // const increase = () =>{
    //     number += 1
    // }

    // setter메서드 사용 (react방식)
    const increase = () =>{
        setNumber(number+1)
    }

    const decrease = () =>{
        setNumber(number-1)
    }


    return (
        <div>
            <button onClick={decrease} >감소</button>
            {number}
            <button onClick={increase}>증가</button>
        </div>
    );
};

export default Count;