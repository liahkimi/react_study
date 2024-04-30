import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import StyledComponent01 from './style/basic/StyledComponent01';
import GlobalStyle from './style/global';
import BasicContainer from './style/basic/BasicContainer';
import FontAwesome from './style/fontAwesome/FontAwesome';
import CharContainer from './context/basic/CharContainer';
import ParentContainer from './context/normal/ParentContainer';
import AnimalsContainer from './context/expert/AnimalsContainer';
import FoodContainer from './ref/expert/FoodContainer';


function App() {
  return (
    // <FoodContainer />
    // // 자식 컴포넌트들이 themeProvider로부터 theme를 제공 받을 수 있음.(theme파일도 import)
    // <ThemeProvider theme={theme}>
    //   {/* <div>
    //     <StyledComponent01 />
    //     <GlobalStyle />
    //   </div> */}
    //   {/* <BasicContainer />   */}
    //   {/* BasicContainer의 BasicButton의 Button의 variant가 theme.PALETTE.background["gray"]를 갖다 쓰기에 ThemeProvider로 감싸줘야함 */}
    //   <FontAwesome />
    // </ThemeProvider>
    // <>안녕 리액트😎</>
    // <CharContainer />
    // <ParentContainer />
    <AnimalsContainer />

  );
}

export default App;