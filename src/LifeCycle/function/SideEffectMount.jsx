import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {

    console.log("최초 마운트")

    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getDates = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const datas = await response.json();
            console.log('리랜더링')
            return datas
        }
        getDates().then(setUsers)
    }, [])

    return (
        <div>
            {users.map((user, i) => <p key={i}>{user.name}</p>)}
        </div>
    );
};

export default SideEffectMount;