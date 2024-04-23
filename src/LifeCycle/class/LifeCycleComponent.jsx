import React, { Component } from 'react';


class LifeCycleComponent extends Component {
    state = {
        number : 0,
        color : null,
    }

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    constructor(props){
        super(props);
        console.log(props);
    }

    // 마운트 단계
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps", nextProps, prevState)
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color}
        }
        return null;
    }

    // render 되었고,
    // componentDidMount(){}
    componentDidMount(){
        console.log("componentDidMount 실행 완료!")
    }

    // 업데이트
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState)
        return nextState.number % 5 !== 0
    }

    // ref 사용
    colorRef = null;

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate", prevProps, prevState)
        if(prevProps.color !== this.props.color){
            return this.colorRef.style.backgroundColor;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState){
            console.log(`업데이트 직전 State: ${prevState}`);
        }
        if(prevProps){
            console.log(`업데이트 직전 props: ${prevProps}`);
        }
        console.log("snapshot", snapshot);
    }


    render() {
        return (
            <div>
                <div
                    ref={(el) => this.colorRef = el}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor : this.state.color,
                        display: "flex",
                        justifyContent : "center",
                        alignItems : "center",
                        color : "#fff"
                    }}
                >
                    <h1>{this.state.number}</h1>
                </div>

                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;