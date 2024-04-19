import React from 'react';

const Form = (props) => {
    // inputsRef={inputsRef} formRef={formRef} onClickInputValue={onClickInputValue}
    const {
        inputsRef,
        formRef,
        onClickInputValue,
        style
    } = props;

    // 실습 35분까지
    // props 받아서 form 태그에
    // input태그 4개 이름, 나이, 핸드폰번호, 이메일
    // 화면 쪽에서 유효값 검사

    return (
        <div>
            <form action="#" style={style} ref={formRef}>
                <div><span>아이디</span><input type="text" name="id" ref={(el) => {inputsRef.current[0] = el}}/></div>
                <div><span>나이</span><input type="text" name="age" ref={(el) => {inputsRef.current[1] = el}}/></div>
                <div><span>핸드폰</span><input type="text" name="phone" ref={(el) => {inputsRef.current[2] = el}}/></div>
                <div><span>이메일</span><input type="text" name="email" ref={(el) => {inputsRef.current[3] = el}}/></div>
                <button type="button" onClick={onClickInputValue}>입력 완료</button>
            </form>
        </div>
    );
};

export default Form;