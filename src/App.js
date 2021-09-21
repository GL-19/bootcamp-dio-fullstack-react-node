import React from 'react';
import { Home } from './pages';
//import { GlobalStyle } from './assets/styles/GlobalStyle'
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
  <>
    <GlobalStyle />
    <Home />
  </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Slab', 'sans-serif', serif;
  }
`;