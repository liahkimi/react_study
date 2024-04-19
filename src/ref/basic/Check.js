import React, { useRef } from 'react';

// 😎useRef를 활용해 아이디와 비밀번호 입력 유효성 검사 로직을 짜보자.

    const Check = () => {
        
    // input의 ref가 여러개일때 -> array 사용
    const inputRef = useRef([]);
    const formRef = useRef();
    // button 이벤트
    // button이 클릭됐을때 반복문으로 검증된 데이터인지 유효성 검사를 한다.
    const onClickToCheck = () =>{
        // in : index / of : value값

        //input에 입력된 값이 없을 때 콘솔에 에러메시지 띄우기
        for(let input of inputRef.current){
            if(!input.value){
                // 어떤 input에 입력이 안된건지 찾기
                console.log(input.name + "error")
                //함수 즉시 종료
                return 
            }
        }
        // 모두 입력되어 유효성 검사 통과시, form이 완료되고 submit 실행하기
        formRef.current.submit()
    }

    return (
        <div>
            <form ref={formRef}>
                <div>
                    <span>아이디</span>
                    {/* 배열로 ref를 여러개 전달 할 때 */}
                    {/* input이 element로 들어오면, inputRef 참조변수의 current프로퍼티의 0번째 요소로 담아준다. */}
                    <input name="id" ref={(element)=>{inputRef.current[0] = element}} />
                </div>
                <div>
                    <span>비밀번호</span>
                    <input name="password" ref={(el)=>{inputRef.current[1] = el}} />
                </div>
                <button onClick ={onClickToCheck} type="button">전송</button>
                {/* form태그 내부의 button은 기본적으로 검증되지 않은 데이터도 submit해버리므로
                    데이터를 검증 후 submit되도록 type="button" 설정해둠   */}
            </form>
        </div>
    );
};

export default Check;