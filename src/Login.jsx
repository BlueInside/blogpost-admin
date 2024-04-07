import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { useActionData, useOutletContext, Navigate } from 'react-router-dom';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const user = useActionData();

  useEffect(() => {
    if (user?.isLogged) setIsLoggedIn(true);
  }, [user, setIsLoggedIn]);

  if (isLoggedIn) return <Navigate to={'/posts'} />;

  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
}
