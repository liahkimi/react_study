import React from 'react';
import styled from 'styled-components'

const Styled = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px #333;
`

const StyledComponent01 = () => {
    return (
        <Styled>
            스타일 된 컴포넌트입니다.😎
        </Styled>
    );
};

export default StyledComponent01;