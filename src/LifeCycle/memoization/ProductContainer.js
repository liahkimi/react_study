import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {
    // 스타일
    const containerStyle = {
        width : "500px",
        height : "300px",
        margin : "20 auto"
    }

    const productStyle = {
        border : "1px solid lightgray",
        padding : "30px",
        lineHeight : "1.3" // 줄 높이
    }

    // Amount 컴포넌트로 넘어갈 div 스타일
    const divStyle = {
        border : "1px solid blue",
        height : "60px",
        display : "flex",
        flexDirection : "row", // flex 생성방향 : row(가로방향/default) , column(세로방향/메인.크로스축 방향 바뀜)
        justifyContent : "space-evenly", // 메인축 - 좌우측 공간 결정
        // flex 속성 : 값들이 동일한 값만큼 공간 나눠씀
        alignItems : "center", // 크로스축 - 위아래측 공간 결정
        padding : "20px",
        marginTop : "20px"
    }

    // p태그 스타일(문구)
    const pStyle = {
        lineHeight : "0"
    }
    // 버튼 스타일
    const buttonStyle = {
        width: "40px",
        height: "40px"
    }

    // 랜더링과 프롭스
    console.log('부모(Container) 랜더링👨‍🦳')
    const [like, setLike] = useState(0);
    const [amount, setAmount] = useState(1);
    const [coupon, setCoupon] = useState(0);


    // useMemo
    // : 동일한 값을 반환하는 함수를 반복적으로 호출해야한다면 
    // 처음 값을 계산할 때 해당 값을 메모리에 저장해 필요할 때마다 다시 계산하지 않고 
    // 메모리에서 꺼내서 재사용하는 것
    
    // side-effect
    // : coupon의 버튼을 누르면 자식컴포넌트 전체가 리랜더링 되어 
    // 수량의 값도 같이 리랜더링 되어버리는 side-effect 발생한다.

    // // props를 useMemo로 관리시켜보기
    // const props = useMemo(()=> {
    //     // 의존성 배열의 값이 업데이트 되는지 확인
    //     console.log('값이 변화됨')
    //     return {amount: amount, coupon: coupon}}, [amount, coupon] // amount와 coupon값이 캐시에 저장됨
    //          // 의존성 배열 : 콜백함수가 의존하고 있는 배열
    //          // 의존성 배열 안에 있는 값이 업데이트 될 때에만 콜백 함수를 다시 호출하여 메모리에 저장된 값을 업데이트 해준다.
    //          // 의존성 배열이 []처럼 빈배열인 경우는, mount된 초기값만 저장되어 버튼을 눌러도 값이 변하지 않는다.(최초 랜더링(마운트)될 때 실행)
    //          // => memoization이 되었을때 캐시에 바뀐 상태값이 올라갔지만, 빈배열이여서 re-rendering되는걸 막아진 것.
    //     )
    //     // => side-effect는 여전히 남아있으므로😒 amount와 coupon을 분리시켜 useMemo에 넘겨야 한다.
    

    // useMemo 값 분리해서 side-effect 없애기
    // 최초 마운트시 콘솔창 : 부모랜더링->amount연산->coupon연산->자식랜더링
    // coupon add button 눌러서 리랜더링시 콘솔창: 부모랜더링->coupon연산->자식랜더링 
    // ❓=> (🤔자식랜더링은 어쨋든 한번 되는거면 side-effect아닌가요??)
    const amountMemo = useMemo(()=>{
        console.log('amount 연산')
        return amount
    }, [amount]) 

    const couponMemo = useMemo(()=>{
        console.log('coupon 연산')
        return coupon
    }, [coupon])

    // 자식 컴포넌트에 보낼 props 선언
    // amount와 coupon에 직접 접근하는게 아닌, 각각의 useMemo에 접근
    const props = { amount:amountMemo, coupon:couponMemo }

    // 좋아요 증가 버튼
    const onClickToLike = () => {
        setLike(like + 1)
    }

    // useCallback(콜백함수, 의존성배열)
    // useCallback(()=>{}, [])
    //⭐의존성 배열 값의 변화가 있을 때 콜백함수를 새로 생성하고, 그렇지 않을 경우 콜백함수를 생성하지 않는다.
    //==> useCallback을 통해 필요없는 함수는 생성하지 않음으로써 성능이 미비하게나마 올라간다.
    // 공식 : 부모 -> 자식 프롭스 함수를 보낼 때 useCallback을 감싸서 보내자.(목적에 맞게 useCallback쓰기)

    // const onClickToAddAmount = useCallback(() => {
    //     setAmount(amount + 1)
    // }, [coupon]) 

    // => useCallback 테스트 
    // : coupon의 값이 변했을때만 해당 콜백함수 활성화되어 버튼 기능 살아남.
    // 1. 처음 마운트될때 전체 값 변함(onClickToAddAmount의 콜백함수 활성화) 
    // 2. coupon이 아닌 amount의 button을 누르면 coupon값 변화 없음(onClickToAddAmount의 콜백함수 비활성화)
    // 3. coupon의 button을 누르면 coupon값 변화 있음(onClickToAddAmount의 콜백함수 활성화)

    const onClickToAddAmount = useCallback(() => {
        setAmount(amount + 1)
    }, [amount]) //amount가 변했을 떄 useCallback으로 감싸기

    const onClickToSubtractAmount = useCallback(() => {
        setAmount(amount - 1)
    }, [amount])

    const onClickToAddCoupon = useCallback(() => {
        setCoupon(coupon + 1)
    }, [coupon])

    const onClickToSubtractCoupon = useCallback(() => {
        setCoupon(coupon - 1)
    }, [coupon])


    return (
        <div style={containerStyle}>
            <div style={productStyle}>
                <p>[책] 배워서 바로 써먹는 리엑트</p>
                <button onClick={onClickToLike}>좋아요 {like}</button>
                <Amount 
                    props={props}
                    divStyle={divStyle}
                    pStyle={pStyle}
                    buttonStyle={buttonStyle}
                    onClickToAddAmount={onClickToAddAmount}
                    onClickToSubtractAmount = {onClickToSubtractAmount}
                    onClickToAddCoupon = {onClickToAddCoupon}
                    onClickToSubtractCoupon = {onClickToSubtractCoupon}
                />
            </div>
        </div>
    );
};

export default ProductContainer;