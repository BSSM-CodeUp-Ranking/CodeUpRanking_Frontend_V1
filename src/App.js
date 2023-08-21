import {styled , createGlobalStyle} from 'styled-components'
import Header from './components/header';

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Header />
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Main = styled.div`
  background-color: #202124;
  width: 100%;
  height: 100vh;

`;

export default App;
