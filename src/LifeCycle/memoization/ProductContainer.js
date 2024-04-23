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
        lineHeight : "1.3"
    }

    const divStyle = {
        border : "1px solid blue",
        height : "60px",
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "center",
        padding : "20px",
        marginTop : "20px"
    }

    const pStyle = {
        lineHeight : "0"
    }

    const buttonStyle = {
        width: "40px",
        height: "40px"
    }



    // 랜더링과 프롭스
    console.log('부모(Container) 랜더링👨‍🦳')
    const [like, setLike] = useState(0);
    const [amount, setAmount] = useState(1);
    const [coupon, setCoupon] = useState(0);



    // const props =useMemo(() => {
    //     console.log("값이 변화됨");
    //     return {amount: amount, coupon: coupon}}, [amount,coupon])


    const amountMemo = useMemo(() => {
        console.log('amount 연산')
        return amount
    }, [amount])

    const couponMemo = useMemo(() => {
        console.log('coupon 연산')
        return coupon
    }, [coupon])

    const props = {amount : amountMemo, coupon : couponMemo}


    // 좋아요 증가 버튼
    const onClickToLike = () => {
        setLike(like + 1)
    }

    // useCallback(콜백함수, 의존성배열)
    // useCallback(()=>{}, [])
    // 부모 -> 자식props 함수를 보낼 떄 useCallback()를 감싸서 보내자.
    const onClickToAddAmount = useCallback(() => {
        setAmount(amount + 1)
    },[amount])
    const onClickToSubtractAmount = useCallback(() => {
        setAmount(amount - 1)
    },[amount])
    const onClickToAddCoupon = useCallback(() => {
        setAmount(coupon + 1)
    },[coupon])
    const onClickToSubtractCoupon = useCallback(() => {
        setAmount(coupon - 1)
    },[coupon])


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