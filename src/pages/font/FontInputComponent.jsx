import React, { useState } from 'react';

// 사용자에게 입력받은 폰트사이즈
// 폰트 크기를 변경하기

const FontInputComponent = () => {

    const [value, setValue] = useState("");
    const onChageInput = (e) => { setValue(e.target.value) }
    console.log(value)

    return (
        <div>
            <h1>1조, 2조 조장 축하합니다☺</h1>
            <input 
                type="text" 
                placeholder='글자 크기를 입력하세요. ex) 1rem'
                value={value}
                onChange={onChageInput}
            />
        </div>
    );
};

export default FontInputComponent;