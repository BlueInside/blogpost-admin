import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
// Styles
import GlobalStyles from '../components/StyledComponents/Global.styled';
import { ThemeProvider } from 'styled-components';
import theme from '../components/StyledComponents/Theme.styled';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar isLoggedIn={isLoggedIn} />
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      </ThemeProvider>
    </>
  );
}
