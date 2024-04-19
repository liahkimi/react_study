import React from 'react';

const Component3 = ({users}) => { // porps객체 중 users객체를 구조분해할당해서 갖고옴

    // console.log(props); //객체 안의 객체 (props객체>users객체)

    // 구조분해할당으로값을 추출하여 변수에 할당하기
    // const { users } = props; // 중첩된 객체인 props객체에서 users객체 추출
    const { name, age, address, phone }  = users; // users객체의 속성들 추출

    return (
        <div>
            {/* 반복되는 props.users 해결하기 */}
            {/* => 구조분해할당으로 추출한 값을 컴포넌트에서 값으로 활용할 수 있다. */}
            <li>{name}</li>
            <li>{age}</li>
            <li>{address}</li>
            <li>{phone}</li>
        </div>
    );
};

export default Component3;
