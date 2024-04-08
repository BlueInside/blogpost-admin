// Get the token
export function getToken() {
  const token = localStorage.getItem('accessToken');
  return token;
}

export function isLogged() {
  return !!localStorage.getItem('accessToken');
}

export function logOut() {
  localStorage.removeItem('accessToken');
}
