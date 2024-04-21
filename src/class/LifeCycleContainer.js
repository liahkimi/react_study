import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

// 랜덤 컬러를 16진수로 표현해주는 함수
const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

class LifeCycleContainer extends Component {

    // 부모의 초기 컬러값
    state = {
        color: "#000000"
    }

    // 값이 언제 변화하는지 보기 위해서 State값 변경 함수를 작성
    onClickToChangeColor = () => {
        this.setState({
            color: getRandomColor()
        })
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickToChangeColor}>색상 변경</button>
                <LifeCycleComponent color={this.state.color}/>
            </div>
        );
    }
}

export default LifeCycleContainer;