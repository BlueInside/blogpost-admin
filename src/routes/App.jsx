import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet context={[isLoggedIn, setIsLoggedIn]} />
    </>
  );
}
