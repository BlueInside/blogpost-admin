import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { useActionData, useOutletContext, Navigate } from 'react-router-dom';
import { CenteredContainer } from '../components/StyledComponents/StyledComponents.styled';
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const user = useActionData();

  useEffect(() => {
    if (user?.isLogged) setIsLoggedIn(true);
  }, [user, setIsLoggedIn]);

  if (isLoggedIn) return <Navigate to={'/posts'} />;

  return (
    <>
      <CenteredContainer>
        <LoginForm />
      </CenteredContainer>
    </>
  );
}
