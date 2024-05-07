import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Intro = () => {
    /* 쿼리스트링으로 hello라고 전달할때만, 안녕하세요를 출력하기 */
    const [searchParams] = useSearchParams();
    const hello = searchParams.get('hello')

    return (
        <>
            <div>
                소개페이지 환영합니다😊!
            </div>
            {/* 파라미터를 보내야 하는데,
                쿼리스트링 방법
            */}
            {/* <div>
                <Link to="/job?title=developer">개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to="/job?title=planner">기획자 소개페이지로 이동</Link>
            </div> */}
            {/* url 파라미터방법
            */}
            <div>
                <Link to="/job/developer">개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to="/job/planner">기획자 소개페이지로 이동</Link>
            </div>
            
            {hello && <h1>환영합니다. 안녕하세요.😎</h1>}
           
  
        </>

    );
};

export default Intro;