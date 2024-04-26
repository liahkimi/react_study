import React from 'react';
import FontSizeComponent from './FontSizeComponent'
import { FontSizeConsumer, FontSizeContext } from './FontContext';

const ChildContainer = ({context}) => {
    return (
        <div>
            <FontSizeConsumer>
                {(context)=>
                <>
                <h6 style={{fontSize : context.state.fontSize}}>안녕하세요. 리액트!</h6> 
                <button onClick={()=>{context.action.setFontSixe('10rem')}}></button>
                </>
                }
            </FontSizeConsumer>
            <FontSizeComponent />
        </div>
    );
};

export default ChildContainer;