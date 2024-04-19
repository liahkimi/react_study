import React from 'react';

const User = (props) => {
    // console.log(props) //user객체 하나씩 출력됨
    
    const {user} = props
    
    return (
        <div>
            {user.name}
            {user.email}
        </div>
    );
};

export default User;