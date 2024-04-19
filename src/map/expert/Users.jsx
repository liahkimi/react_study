import React from 'react';
import User from './User';

const Users = ({users}) => {
    // console.log(props) //users 배열객체 출력됨

    return (
        <div>
            {/* map 반복문으로 객체 1개씩 반복 추출하여 User컴포넌트로 넘기기 (key값 필수) */}
           {users.map((user, i, users) => <User key={i}  user={user}/>)} 
        </div>
    );
};

export default Users;