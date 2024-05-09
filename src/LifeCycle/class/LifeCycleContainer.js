import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent'

// 랜덤컬러를 16진수로 표현해주는 함수
const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
    // 16진수의 컬러값 리턴하기 위해 #으로 시작
    // Math.floor() : 소수점 벌기ㅣ
    // Math.random() : 랜덤값(소수점자리) 생성
    // 16777215 : 색상을 표현할 수 있는 값의 갯수로 곱하기
    // toString(16) : 16진수로 변환
}
// 컨테이너
class LifeCycleContainer extends Component {

    // 부모의 초기 컬러값
    state = {
        color: "#000000"
    }
     
    // 값이 언제 변화하는지 보기 위해서 State값 변경 함수를 작성
    // 클래스형 컴포넌트는 useState 개념이 없어서 this를 사용한다. 
    // 클래스를 사용할 때 '객체화'가 되어 this는 해당 객체화 된 객체를 찾아 간다.
    // ex. this => LifeCycleContainer 
    onClickToChangeColor = () => {
        this.setState({
            color : ""
        })
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickToChangeColor} >색상 변경</button>
                <LifeCycleComponent color={this.state.color}/> 
            </div>
        );
    }
}

export default LifeCycleContainer;