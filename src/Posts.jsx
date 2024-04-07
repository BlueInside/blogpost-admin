import { useLoaderData } from 'react-router-dom';
import Post from './components/Post';

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);
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
