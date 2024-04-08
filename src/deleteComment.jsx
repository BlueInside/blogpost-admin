import { redirect } from 'react-router-dom';

export async function actionDelete({ params }) {
  const url = `http://localhost:3000/posts/${params.postId}/comments/${params.commentId}`;
  const token = localStorage.getItem('accessToken');
  const options = {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json();
    alert(error.error + ', try to log in.');
    return redirect('/login');
  }

  return redirect(`/posts/${params.postId}`);
}
