import { redirect } from 'react-router-dom';

export async function actionLogin({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');
  let errors = {};

  // Validate fields
  if (username.length < 1) {
    errors.username = `Username must be at least 1 character`;
  }

  if (password.length < 5) {
    errors.password = `Password must be at least 5 characters`;
  }

  // Return data if errors occurred
  if (Object.keys(errors).length) {
    return errors;
  }

  // Login user and redirect
  const url = 'http://localhost:3000/users/login';
  const options = {
    mode: 'cors',
    method: request.method,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ username, password }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error) {
      errors.response = data.error;
      return errors;
    }
    // No errors, token received
    const token = data.token;
    // Save token in localStorage
    localStorage.setItem('accessToken', token);
  } catch (err) {
    throw new Error('Error during logging in', err);
  }
  return redirect('/posts');
}
