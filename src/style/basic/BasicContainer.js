// App.js>BasicContainer>BasicButton>style>theme
import React from 'react';
import BasicButton from '../components/button/BasicButton';

const BasicContainer = () => {
    return (
        <div>
            <BasicButton 
                variant={"primary"} 
                size={"large"} 
                shape={"round"}
                // onClick={}
            >제가 만든 베이직 버튼이예요😎</BasicButton>
        </div>
    );
};

export default BasicContainer;