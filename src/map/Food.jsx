import React from 'react';

const Food = ({food}) => {
    // console.log(props); // 🙄리랜더링으로 8개 출력되어야 하나, 현재 4개만 출력됨 ㅠ(문의중)
    const {id,name} = food;
    return (
        <div>
            {id}.{name}
        </div>
    );
};

export default Food;