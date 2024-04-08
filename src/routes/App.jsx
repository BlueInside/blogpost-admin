import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { isLogged } from '../utils/authentication';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged());

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
    </>
  );
}
