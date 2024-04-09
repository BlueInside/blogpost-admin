import PropTypes from 'prop-types';
import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from './StyledComponents/Navbar.styled';
import { Flex1 } from './StyledComponents/StyledComponents.styled';
export default function Navbar({ isLoggedIn }) {
  return (
    <NavbarContainer>
      <NavbarList>
        <Flex1>
          <NavbarItem>
            {' '}
            {isLoggedIn ? (
              <NavbarLink to={'log-out'}>Log out</NavbarLink>
            ) : (
              <NavbarLink to={'login'}>Login</NavbarLink>
            )}
          </NavbarItem>
        </Flex1>
        <div>
          <NavbarItem>
            <NavbarLink to={'posts'}>Posts</NavbarLink>
          </NavbarItem>
        </div>
        <div>
          <NavbarItem>
            <NavbarLink to={'posts/new'}>New Post</NavbarLink>
          </NavbarItem>
        </div>
      </NavbarList>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};
