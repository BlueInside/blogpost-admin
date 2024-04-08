import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ isLoggedIn }) {
  return (
    <>
      <ul>
        <li>
          {' '}
          {isLoggedIn ? (
            <Link to={'log-out'}>Log out</Link>
          ) : (
            <Link to={'login'}>Login</Link>
          )}
        </li>
        <li>
          <Link to={'posts'}>Posts</Link>
        </li>
        <li>
          <Link to={'posts/new'}>New Post</Link>
        </li>
      </ul>
    </>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};
