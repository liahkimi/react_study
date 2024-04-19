import React from 'react'; // js파일에서도 jsx문법 사용 가능
import Component3 from './Component3';
// import Component1 from './Component1';
// import Component2 from './Component2';


const Container = () => {
    // const name ='김가은'
    // const age = 20;
    // const style = {
    //     color: "red"
    // }
    const users ={
        name : '김가은',
        age : 20,
        phone :' 010-6225-3173',
        address :'서초중앙로 18',

    }

    // 컴포넌트3을 만든 후 자식 컴포넌트에게 이름, 나이, 전화번호, 주소를 전달 후 화면에 출력

    return (
        <>
            {/* <Component1 name={name} age={age}/> */}
            {/* <Component2 style={style}/> */}
            <Component3 users={users}/>
        </>
    );
};

export default Container;