import React from 'react';
import GlobalStyles from "./styles/global";
import { BrowserRouter,HashRouter } from 'react-router-dom';
import Routes from './routes'; 

function App() {
  return (
    <HashRouter>
        <GlobalStyles/>
        <Routes /> 
    </HashRouter>
  );
}

export default App;
