import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

// 랜덤 컬러를 16진수로 표현해주는 함수
const getRandomColor = () => { //16777215 : 16진수로 색상을 표현할수 있는것들의 갯수
                                //toString(16) : 16진수로 변경
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
// 클래스형 컴포넌트
// useState개념이 없다.
// this값은 class(객체(추상적))를 찾아가게 되어있음
// this는 class 중에서 구제화된 instance임. this = 인스턴스
// class 내부의 메서드들 (state,)
class LifeCycleContainer extends Component {

    // 부모의 초기 컬러값 🤔근데 state변수는 let이나 const 안써줘도 되나용?
    state = {
        color: "#000000"
    }

    // 값이 언제 변화하는지 보기 위해서 State값 변경 함수를 작성
    onClickToChangeColor = () => {
        this.setState({ //🤔useState개념이 없는데, setState는 쓰나요?
            color: getRandomColor()
        })
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickToChangeColor}>색상 변경</button>
                <LifeCycleComponent color={this.state.color}/>
                {/* => color를 자식컴포넌트에게 props로 넘겨줘야해서 */}
                {/* this.state.color = 클래스에 있는 state값의 color */}
            </div>
        );
    }
}

export default LifeCycleContainer;