import React, { useState } from 'react';


// 1> 리액트의 불변성과 state
// - 홈페이지가 처음 마운트 되었을 때 그 값은 절대 바뀌면 안된다는 성질
// - js querySelector나 getElementById처럼 dom에 접근해 값을 바꾸면 안됨
// - 무조건 상태변경이 된 것만 다시 그려준다.

const Sound = () => {
    // 강아지 버튼, 고양이 버튼
    // 강아지 버튼을 눌렀을 때, 강아지의 울음소리가 나오도록 출력
    // 고양이 버튼을 눌렀을 때, 고양이의 울음소리가 나오도록 출력

    //  [변수, 상태변화를 위한 setter메서드] = useState('초기값')
    const [sound, setSound] = useState(""); //use~(훅 함수)
    const dogButton = () =>{
        // sound변수를 조작하기 위해 setSound메서드를 사용한다.
        setSound("멍멍 오늘 화요일 화난다!😠")
    }
    const catButton = () =>{
        setSound("고양이는 야옹!😺")
    }

    return(
        <div>
            {/* p태그 부분이 마운트했을 때 없었던 부분이 상태변경으로
                생기면서 리랜더링 되어 화면에 보여진다. */}
            <p>{sound}</p>
            <button onClick={dogButton}>강아지 버튼</button>
            <button onClick={catButton}>고양이 버튼</button>
        </div>
    );

};

export default Sound;