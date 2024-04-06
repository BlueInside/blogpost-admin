import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to={'login'}>Login</Link>
        </li>
        <li>
          <Link to={'posts'}>Posts</Link>
        </li>
        <li>
          <Link to={'posts/create'}>New Post</Link>
        </li>
      </ul>
    </>
  );
}
