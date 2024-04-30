import React, { useRef, useState } from 'react';

// 😎실습 : 
// - 한글 음식명, 영어 음식명을 입력하여 추가 버튼을 누르면
// - 아래 결과에서 한글 음식명(영어 음식명)으로 표현하는 리스트 구현
// - 리스트에서 체크박스로 삭제 버튼을 누르면 해당 리스트가 삭제



// 입력하여 처음 들어올 때  list와 checkbox는 index를 공유중
// 그래서 index값으로 true인지 false인지 구별해야하는 로직임.

// 김치1   체크X
// 김치2   체크X
// 김치3   체크0

// 김치3를 입력하고 추가버튼을 눌렀을 때,
// setChecked(checked.concat(false))
// 체크해제되어 있는 체크상태를 추가해줌(해제된 입력값이 들어오므로)
// checked : [F, F] => checked : [F, F, F]

// 김치3를 체크했을때,
//  checked.splice(i, 1, !checked[i]);
// 체크한 그 index 하나만 false에서 true로 바꿔버림
// checked : [ F, F, F] => checked : [ F, ,F, T]
// 그 상태로 concat으로 리랜더링
//  setChecked(checked.concat());

// setFoods( foods.filter((food, i) => !checked[i]))
// foods [ 김치1, 김치2, 김치3 ]  => foods[ 김치1, 김치2]
// => 체크 안된것들만 남음
// => 체크된것을 날리면, list의 index는 사라지지만, checked의 index는 여전히 length가 3이다.

// setChecked( new Array(foods.length).fill(false))
// checked : [ F, F, T  ] => checked[F, F]
// => 날리고 난 뒤의 foods의 길이로 new Array 만들어주기


const FoodContainer = () => {

    // style
    const style = { listStyle : "none" };

    // inputRef - input 참조값들
    // ref : 참조의 목적이 있을 때만 사용
    const inputRef = useRef([])

    // food의 상태 - 화면에 보여질 입력한 food값들의 상태
    // 추가 버튼 누르면 리랜더링 되어 food의 상태관리를 해야하므로.
    const [foods, setFoods] = useState([]); //[{kor:김치,eng:kimchi},{kor:죽,eng:jook}...]

    // check의 상태 - 삭제버튼을 클릭하기 전, 체크박스를 체크한 것을 삭제해야 하므로.
    // checked 배열 = 각 음식 항목이 체크되었는지 여부를 나타내는 것
    // checked = true(체크) , !checked = false(해제)
    const [checked, setChecked] = useState([]);

    // foodList 만들기
    // map() - 새로운 주소값을 갖는 배열을 반환해줘서 바뀐 상태를 확인할 수 있음.
    const foodList = foods.map(({kor, eng}, i) => { 
        //foods를 비구조화 할당해서 kor,eng변수 가져옴
        // foodList에 반환해주기 위해 return (return:1.함수의 기능 종료 2.사용한곳으로 값 반환)
        return (
            // li태그가 변화된 값을 찾아가기 위해 key값 필요
            <li key={i} style={style}>
                <input 
                    type="checkbox" 
                    // checked 상태를 관리하기 위해서 
                    //즉 Check index와 foods의 list를 비교해서 검사하기 위해서 상태를 관리한다.
                    // checked배열의 상태와 foodList의 상태가 같아짐
                    checked = { checked[i] }
                    
                    // checked 안에 상태를 바꾸기 위해서 사용하는 함수
                    onChange={()=>{onChangeCheckBox(i)}}
                />
                {/* 템플릿 리터럴로 변수와 문자열 연산함 */}
                {`${kor} (${eng})`} 
            </li>
        );
    })

    // ➕food추가버튼
    const onClickToAdd = () => {
        // 잘 동작하는지 확인
        // console.log("추가 버튼");

        // setfoods 값을 추가한 것
        setFoods(
            foods.concat({ 
            // foods배열에 값 추가 방법: [{kor:김치,eng:kimchi},{kor:죽,eng:jook}]
                kor : inputRef.current[0].value, //한국음식 입력칸의 값
                eng : inputRef.current[1].value  //영어음식 입력칸의 값
            })
        )
        // 잘들어갔는지 확인
        // console.log(inputRef.current[0].value,inputRef.current[1].value)

        // 추가했을 때 checked의 상태도 같이 false로 넣어 놓는 것
        setChecked(checked.concat(false))
    } 

    // checked의 상태를 관리하는 checkBox 
    // => check상태를 확인해 checked상태 배열에 넣어주는 checkBox
    // checked 상태를 클릭했을 때 변화를 주기 위해서 splice(index, 몇 개, '값') == 수정
    // i는 input에서 체크한 그 index값
    const onChangeCheckBox = (i) => {
        // splice(index, 몇개 수정할지 갯수, 바꿔지게 될 값 )
        checked.splice(i, 1, !checked[i]);
        // 바꾼 값을 적용시켜주기 위해서 리랜더링
        setChecked(checked.concat());
    }

    // ➖food삭제버튼
    const onClickToRemove = () => {
        // 적용되는지 확인
        // console.log("삭제 버튼");

        // setFoods 상태관리
        // foodlist중에서 체크된것을 찾아야 하고, 체크된것을 filter로 없애야하기에 setFoods를 사용!
        // 체크된 것을 삭제 해야되기 때문에, checked[i]인 상태로 삭제버튼을 누르면 클릭한 값이 남으니
        // ! not붙여서 반대 값인 체크가 안된 food들만 배열 foods에 넣는다.
        setFoods( foods.filter((food, i) => !checked[i]))

        // setCheceked 상태관리
        // Foods의 길이만큼 new Array() .fill(false)로 전달하여 다시 만들어 Checked의 배열에 넣는다.
        // *체크된 food값은 삭제되었으니,남은 foods길이의 새 배열을 만들고, check상테는 해제로 만든다.
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