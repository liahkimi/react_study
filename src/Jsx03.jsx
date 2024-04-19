// name, massage 화면에 출력하기 실습
// 환영합니다.

import React from 'react';

const Jsx03 = () => {
    const name = '김가은'
    const message = '환영합니다😁'

    return (
        <div>
            {name}님 {message}
        </div>
    );
};

export default Jsx03;