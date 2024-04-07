export async function loader() {
  const url = `http://localhost:3000/posts`;
  const options = { mode: 'cors' };
  const res = await fetch(url, options);
  if (res.status > 400) {
    throw new Response('Not Found', { status: 404 });
  }
  return res.json();
}
