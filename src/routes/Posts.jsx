import { useLoaderData, useOutletContext } from 'react-router-dom';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
export default function Posts() {
  const posts = useLoaderData();
  const [isLoggedIn] = useOutletContext();

  if (!isLoggedIn)
    return (
      <h1>
        Please log in first: <Link to={'/login'}>here</Link>
      </h1>
    );
  return (
    <>
      <h1>Posts: </h1>
      {posts.length === 0 && <p>There is no posts</p>}
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          content={post.content}
          isPublished={post.isPublished}
        />
      ))}
    </>
  );
}
