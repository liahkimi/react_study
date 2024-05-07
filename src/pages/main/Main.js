import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            Route 연습 메인페이지😎!! 
            <Link to="/intro" >소개페이지로 이동</Link>
        </div>
    );
};

export default Main;