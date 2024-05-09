import React, { Component } from 'react';

// 컴포넌트
class LifeCycleComponent extends Component {
    // extends (상속의 관계(container => componenet))
    
    state = {
        number : 0,
        color : null, // 부모의 #000000을 null값으로 덮어씌움
    }

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }


    // <마운트 단계>
    // 마운트 단계는 컴포넌트가 처음으로 생성될 때 발생한다. 
    // 이 단계에서 컴포넌트의 초기화 작업을 수행하거나 외부 데이터를 가져와 초기 상태를 설정하는 등의 작업을 한다.
    // = 마운트 단계에서는 현재 상태와 변화된 상태를 버츄얼돔이 비교하여 해당 부분을 수정해야하는 단계.


    // 1. constructor : 새로운 컴포넌트를 생성할 때 마다 자동으로 호출되는 특별한 메서드
    constructor(props){
        super(props) // 부모를 호출하는 키워드
        console.log(props); // 부모컬러인 #00000이 콘솔창에 뜨는걸로 확인 가능
    } 
    // 2. getDerivedStateFromProps : prop를 state에 넣을 때 사용한다.(버추얼돔이 사용)
    // nextProps : 마운트 중이므로, virtualDom기준으로 가장 처음 만나는 컴포넌트가 부모 컴포넌트
    // prevState : 기존의 이전 상태는 현재 여기인 자식 컴포넌트..???

    // static이 없을 때의 기존 순서 : 버츄얼돔 -> 부모컴포넌트 -> 자식컴포넌트
    // static은 컴파일러가 제일 첫순서로 올려주기 때문!
    // => getDerivedStateFromProps를 버츄얼 돔이 사용하는데, 자식 내부에 메서드가 선언되어 부모의 값을 못 받아 온다.
    // => 그래서 static 키워드를 사용!
    // static을 붙였을 때의 순서 : 자식의getDerivedStateFromProps -> 버츄얼돔 -> 부모 -> 자식
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps", nextProps, prevState )
        // nextProps=부모컴포넌트={color: '#000000'}, prevState=자식컴포넌트={number: 0, color: null}
        if(nextProps.color !== prevState.color ){
            // 부모의 props가 자식의 state값과 다르면, 상태가 다름을 감지해서
            // 이전 상태(null값이였던걸)를 지우고  black으로 색을 바꿈
            return{color:nextProps.color} // 부모값(nextProps.color)을 자식요소(color)에 넣어줌
        }
        // 부모값과 자식의 값이 같다면, 
        return null; 
        // = 아무것도 리턴하지 않는다는 의미
        // = color가 바뀌지 않았는데 굳이 color를 다시 대입시키는 것을 하지 않기위해 null을 사용
        // = 값에 변화를 주지 않겠다는 의미.
    }
     // 3. render()함수 진행 되어서 이미 리랜더링 됨,
     // => react에 index 구조를 보면 render() 함수는 이미 실행중이다.  
     // => getDerivedStateFromProps에서 변화를 주었으므로 따로 실행해주지 않아도 변화가 감지된 부분이 리랜더링된다.

     // 4. componentDidMOunt()
     componentDidMount(){
        console.log("componentDidMount 실행 완료")
     }



    render() {
        return (
            <div>
                <div
                style={{
                    width: "100px",
                    height : "100px",
                    backgroundColor : this.state.color,
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    color : "#000"
                }}
                >
                    <h1>{this.state.number}</h1>
                </div>
                
                <button onClick ={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;