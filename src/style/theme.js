// 화이트 모드, 다크 모드
const theme = {};

// 디자인 가이드 토대로 
// 이름들은 상수로 선언

// 색상
theme.PALETTE = {
    primary : {
        main : "#ffd159",
        sub: "#fff4d8"
    },
    secondary : "#f1ebf5",
    white: "#fff",
    gray: {
        // 명암 단위 구별
        100 : "#f1ebf5",
        200 : "#aea8b2",
        300 : "#605866",
    },
    error : "#eb6144",
    background : {
        white : "#fff",
        gray : "#f1ebf5"
    }
}

// 폰트 크기
theme.FONT_SIZE = {
    h1: "55px",
    h2: "40px",
    h3: "30px",
    h4: "21px",
    h5: "18px",
    h6: "16px",
    h7: "12px",
}

// 폰트 굵기
theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    bold: "800",
    
}

// 폰트 높이
theme.FONT_LINE = {
    h1: "75px",
    h2: "55px",
    h3: "41px",
    h4: "29px",
    h5: "25px",
    h6: "22px",
    h7: "17px",
}


export default theme;