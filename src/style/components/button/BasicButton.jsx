import React from 'react';
import Button from './style';

// BasicButton 자체가 스타일된 버튼 컴포넌트이므로, S를 선언하지 않음
const BasicButton = ({variant, size, shape, children, ...rest }) => {
    // children: A 컴포넌트에서 B 컴포넌트 내용을 보여주려고 사용하는 props
    // ...rest: 어떤 event던지 받아줄 props
    return (
        //= styled.button import
        <Button variant={variant} size={size} shape={shape} {...rest}>
            {children}
        </Button>
    );
};

export default BasicButton;