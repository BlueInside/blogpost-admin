import { redirect } from 'react-router-dom';

export async function actionUpdate({ params, request }) {
  const formData = await request.formData();
  let updates = Object.fromEntries(formData);

  const url = `http://localhost:3000/posts/${params.postId}`;
  const token = localStorage.getItem('accessToken');
  const options = {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json();
    console.error(error);
    return redirect(`/posts/${params.postId}`);
  }

  return redirect(`/posts/${params.postId}`);
}
