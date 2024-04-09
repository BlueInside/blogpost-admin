export async function postsLoader() {
  const url = `https://blogpost-restapi.fly.dev/posts`;
  const options = { mode: 'cors' };
  const res = await fetch(url, options);
  if (res.status > 400) {
    throw new Response('Not Found', { status: 404 });
  }
  return res.json();
}

export async function postLoader({ params }) {
  const url = `https://blogpost-restapi.fly.dev/posts/${params.postId}`;
  const options = { mode: 'cors' };
  const res = await fetch(url, options);
  if (res.status > 400) {
    throw new Response('Not Found', { status: 404 });
  }
  return res.json();
}

export async function commentsLoader({ params }) {
  const url = `https://blogpost-restapi.fly.dev/posts/${params.postId}/comments`;
  const options = { mode: 'cors' };
  const res = await fetch(url, options);
  if (res.status > 400) {
    throw new Response('Not Found', { status: 404 });
  }
  return res.json();
}
