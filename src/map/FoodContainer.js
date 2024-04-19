import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const style = {
        listStyle : "none"
    }

    // 이터러블한 객체인 배열 사용
    const foods = [
        {
            id : 1,
            name : '샐러드'
        },
        {
            id : 2,
            name : '떡볶이'
        },
        {
            id : 3,
            name : '치킨'
        },
        {
            id : 4,
            name : '피자'
        }
    ]

    // array.forEach(callback(currentValue , index , array));
    // 현재 처리 중인 요소의 값, 현재 처리 중인 요소의 인덱스, forEach()를 호출한 배열
    // const foodList = foods.forEach((food, i, foods)=><li>{food.name}, {food.id}</li>) // 연산이 필요하기에 변수에 담아줌.
    // => forEach는 결과를 반환하지 않아서 변수에 담을 값이 없다.


   
    // 리액트에서는 map을 사용하자!
    // const foodList = foods.map((food, i, foods) => <li key={i} style={style}>{food.name}.{food.id}</li>) // 연산이 필요하기에 변수에 담아줌.
    // key값 사용 이유 : 버츄얼돔으로부터 화면쪽에 바뀐것이 있는지 상태 검사할 때, 바뀐 컴포넌트의 key값을 알아야 구분이 가능하므로.

    // 😎실습 : li태그를 Food컴포넌트로 변경해보기(실습)
    const foodList = foods.map((food, i, foods) => <Food key={i} style={style} food={food}/>) // 연산이 필요하기에 변수에 담아줌.
    

    console.log(foodList); // 콘솔에 2번 찍히는 이유 : 1.버츄얼돔에서 첫랜더링 2.화면쪽에 바뀐것이 있는지 검사 후 리랜더링
    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;