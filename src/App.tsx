import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { StyleSheetManager, ThemeProvider } from 'styled-components';

import { Quiz } from './components/Quiz';
import { Email } from './components/Email';
import { Success } from './components/Success';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const theme = {
  $width: '375px',
  $padding: '0 20px',
  $background_color: '#1f002b',
  $text_color: '#fff',
  $accent_color: '#e4229c',
  $option_background_color: '#36173d',
  $option_background_active_color: 'rgba(228, 34, 155, 0.2)',
  $checkbox_background_color: '#6d4376',
}

const StyledContainer = styled.div`
  background-color: ${props => props.theme.$background_color};
  width: ${props => props.theme.$width};
  padding: ${props => props.theme.$padding};
  font-size: 24px;
  margin: 0 auto;
  height: 100vh;
`

export const App = () => {
  const languageInStorage = localStorage.getItem('selectedLanguage');
  const [ currentLanguage, setCurrentLanguage ] = useState(languageInStorage || 'en');
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
    changeLanguage(currentLanguage);
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage, i18n])

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'percents' && prop !== 'alignment' && prop !== 'active'}>
          <Router>
            <Routes>
              <Route path="/user-quiz/quiz" element={<Navigate to="/user-quiz/quiz/1" />} />
              <Route path="/user-quiz/quiz/:questionId" element={<Quiz setCurrentLanguage={setCurrentLanguage}/>} />

              <Route path="/user-quiz/loader" element={<Loader />} />

              <Route path="/user-quiz/email" element={<Email />} />
              <Route path="/user-quiz/success" element={<Success />} />

              <Route path="*" element={<Navigate to="/user-quiz/quiz" />} />
            </Routes>
          </Router>
        </StyleSheetManager>
      </StyledContainer>
    </ThemeProvider>
  )
}

{/* <Route path="/user-quiz/*">

<Route path="quiz" element={<Navigate to="quiz/1" />} />
<Route path="quiz/:questionId" element={<Quiz setCurrentLanguage={setCurrentLanguage} />} />

<Route path="loader" element={<Loader />} />

<Route path="email" element={<Email />} />
<Route path="success" element={<Success />} />

<Route path="*" element={<Navigate to="/quiz" />} />
</Route> */}