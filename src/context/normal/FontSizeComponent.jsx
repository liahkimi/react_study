import React from 'react';
import { FontSizeConsumer, FontSizeContext } from '../FontSizeContext';

const FontSizeComponent = () => {
    return (
        <div>
            
            <FontSizeConsumer>  
                {(context)=>
                    <>
                    {/* context라는 공용 저장공간의 value가 전역에서 쓰이므로 같이 작아지고 커짐 */}
                    {/* action은 context로 사실 쓰지 않고, 추후 배울 redux를 씀.  */}
                    {/* 변화를 주면 안되지만 혹시나 변화가 생길 것을 대비하여 변화까지 생각해서 만들어 놓았다. */}
                        <p style={{fontSize: context.state.fontSize}}>안녕하세요. 컨텍스트입니다.😎</p>
                        <button onClick={()=>{context.action.setFontSize("1rem")}}>작아지는 버튼</button>
                    </>
                }
            </FontSizeConsumer>
        </div>
    );
};

export default FontSizeComponent;