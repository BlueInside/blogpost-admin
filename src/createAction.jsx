import { redirect } from 'react-router-dom';

export async function actionCreate({ request }) {
  const form = await request.formData();
  const formData = Object.fromEntries(form);

  const url = `http://localhost:3000/posts/`;
  const token = localStorage.getItem('accessToken');

  const options = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  };

  let errors = {};

  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json();
    if (error?.error) {
      errors.validationErrors = error.errors;
      return errors;
    }
    console.log(error);
    return redirect('/posts');
  }

  return redirect(`/posts`);
}
