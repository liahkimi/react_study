// age는 상수로 나이를 설정
// 19세 이하라면 "입장 불가😅"
// 성인이라면 "입장 가능"
// age가 짝수라면 "당첨"
// 짝수가 아니라면 "꽝"을 화면에 출력
// 39분까지

// if문을 쓰지 않고 연산자로 출력하기 실습
import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
    // age는 상수로 나이를 설정
    const age = 19;
    // 비구조화 할당-배열 (한번에 값 할당)
    // const [pass, notPass, lucky, unLucky] = ['입장 가능', '입장 불가', '당첨', '꽝']

    // 조건식을 변수에 담음
    const isAdult = age >= 19; // 19세 이상인지의 조건식
    const isEven = age % 2 === 0; // 짝수인지의 조건식

    // 컴포넌트를 제작 - 화면에 띄워질 메시지들 div태그에 넣기
    // 컴포넌트 내부에 띄워쓰기를 사용할 수도 있으므로 소괄호를 사용함
    // const passComponent = (<div>{pass}</div>) // 입장 가능
    // const notPassComponent = (<div>{notPass}</div>) // 입장 불가
    // const luckyComponent = (<div>{lucky}</div>) // 당첨
    // const unLuckyComponent = (<div>{unLucky}</div>) // 꽝

    // 삼항 연산자 - 조건식
    // 컴포넌트 분리
    const enter = isAdult ? <PassComponent /> : <NotPassComponent />; // 19세 이상이면 입장가능, 미만이면 입장불가
    const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />; // 짝수면 당첨 아니면 꽝

    // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
    // 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
    // 조건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력되지 않음
    // && 연산자 앞의 조건식이 false이면 뒤를 실행하지 않으며, false 라는 값은 랜더링 되지 않음

    // 렌더링할 컴포넌트 부분
    return (
        <div>
            당신의 나이는 {age}입니다.
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;