import React from 'react';
import { FontSizeConsumer } from './FontContext';

const FontSizeComponent = () => {
    return (
        <div>
            
            <FontSizeConsumer>
                {(context)=>{
                <>
                    <p style ={{fontSize: context.this.state.fontSize}}>안녕하세요. 컨텍스트입니다!</p>
                    <button onClick ={()=>{context.action.setFontSize("1rem")}}>작아지는 버튼</button>
                </>
                    
                }}
            </FontSizeConsumer>
        </div>
    );
};

export default FontSizeComponent;