import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import { StyledEngineProvider } from '@mui/material/styles';
import { dashBoardTheme } from "./dashBoardTheme"

import App from './pages/App/App';
import TestApp from './pages/TestApp/TestApp';
import EveryDayWord from './pages/EveryDayWord/EveryDayWord';
import Kakunin from './pages/EveryDayWord/Kakunin';
// import WordList from './pages/WordList/WordList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <StyledEngineProvider injectFirst> */}
    <ThemeProvider theme={dashBoardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}>
            {/* <Route path="wordlist" element={<WordList />} /> */}
            <Route path="forgetlist" element={<TestApp />} />
            <Route path="everydayword/*" element={<EveryDayWord />} />
              <Route path="everydayword/kakunin/*" element={<Kakunin />} />

          </Route>
        </Routes>
      </BrowserRouter>,
    </ThemeProvider>
    {/* </StyledEngineProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
