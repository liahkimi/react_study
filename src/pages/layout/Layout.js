import React from 'react';
import { Outlet } from 'react-router-dom';
// Outlet의 역할
// 라우팅에서 children으로 들어오는 컴포넌트들을 모두 화면에 뿌려주는 컴포넌트

const Layout = () => {
    return (
        <>
            <header>여기는 header</header>
            <main>
                <Outlet />
            </main>
            <footer>여기는 footer</footer>
        </>


    );
};

export default Layout;