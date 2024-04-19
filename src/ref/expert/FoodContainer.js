import React, { useRef, useState } from 'react';

// 실습 한글 음식명, 영어 음식명을 입력하여 추가 버튼을 누르면
// 아래 결과에서 한글 음식명(영어 음식명)으로 표현하는 리스트 구현
// 리스트에서 체크박스로 삭제 버튼을 누르면
// 해당 리스트가 삭제
// 실습(8:30)
const FoodContainer = () => {
    // style
    const style = { listStyle : "none" };

    // inputRef
    const inputRef = useRef([])

    // food 상태
    const [foods, setFoods] = useState([]);
    const [checked, setChecked] = useState([]);

    // foodList 만들기
    // map()
    const foodList = foods.map(({kor, eng}, i) => {
        return (
            <li key={i} style={style}>
                <input 
                    type="checkbox" 
                    // checked 상태를 관리하기 위해서 즉 Check indax와 
                    // foods의 list를 비교해서 검사하기 위해서
                    // 상태를 관리한다.
                    checked = { checked[i] }
                    
                    // checked 안에 상태를 바꾸기 위해서 사용하는 함수
                    onChange={()=>{ onChangeCheckBox(i)}}
                />
                {`${kor} (${eng})`}
            </li>
        );
    })

    // food추가버튼
    const onClickToAdd = () => {
        // setfoods 값을 추가한 것
        setFoods(
            foods.concat({
                kor : inputRef.current[0].value,
                eng : inputRef.current[1].value
            })
        )
        // 추가했을 때 checked의 상태도 같이 false로 넣어 놓는 것
        setChecked(checked.concat(false))
    } 

    // checked 상태를 클릭했을 때 변화를 주기 위해서 splice(index, 몇 개, '값') == 수정
    const onChangeCheckBox = (i) => {
        checked.splice(i, 1, !checked[i]);
        // 바꾼 값을 적용시켜주기 위해서 리랜더링
        setChecked(checked.concat());
    }

    // food삭제버튼
    const onClickToRemove = () => {
        // 체크한 것을 삭제 해야되기 때문에, checked[i]인 상태로 삭제버튼을 누르면 클릭한 값이 남으니
        // ! not붙여서 반대 값을 배열 foods에 넣는다.
        setFoods( foods.filter((food, i) => !checked[i]))
        // Foods의 길이만큼 new Array() .fill(false)로 전달하여 다시 만들어 Checked의 배열에 넣는다.
        setChecked( new Array(foods.length).fill(false))
    }

    return (
        <div>
            <input type="text" placeholder='한국 음식 이름' ref={((element) =>{ inputRef.current[0] = element})}/>
            <input type="text" placeholder='영어 음식 이름' ref={((element) =>{ inputRef.current[1] = element})}/>
            <button onClick={onClickToAdd}>추가</button>
            <button onClick={onClickToRemove}>삭제</button>
            <div>
                <ul>
                    {foodList}
                </ul>
            </div>
        </div>
    );
};

export default FoodContainer;