import React, { useState } from 'react';

const Name = () => {
    const [result, setResult] = useState("초깃값")
    const viewResult = (e) => {
        // event를 발생시킨 커미션은 이벤트 객체인'e'가 갖고 있음
        // console.log(e)

        // input창에 입력한 value가 무엇인지 onChange이벤트의 이벤트객체 내부의 e.target.value를 통해 알 수 있다.
        setResult(e.target.value)
        // p태그의 result의 상태를 "초깃값" => e.target.value값으로 상태 변경된다.
    }
    return (
        <div>
            <p>{result}</p>
            <input onChange={viewResult} />
        </div>
    );
};

export default Name;