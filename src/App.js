import { ThemeProvider } from 'styled-components';
import './App.css';
import ProductContainer from './LifeCycle/memoization/ProductContainer';
import StyledComponent01 from './style/basic/StyledComponent01';
import GlobalStyle from './style/global';
import theme from './style/theme';
import BasicContainer from './style/basic/BasicContainer';
import FontAwesome from './style/fontAwesome/FontAwesome';
import CharContainer from './context/basic/CharContainer';
import ParentContainer from './context/normal/ParentContainer';



function App() {
  return (
      // <ProductContainer />
        // <ThemeProvider theme={theme}>
        //   <BasicContainer />
        // </ThemeProvider>
      //       {/* <div>
      //           <StyledComponent01 />
      //           <GlobalStyle /> 
      //          </div> */}
            
      //       <FontAwesome />
          
      // <CharContainer />
      <ParentContainer />

  );
}

export default App;