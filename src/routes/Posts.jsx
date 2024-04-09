import { useLoaderData, useOutletContext } from 'react-router-dom';
import Post from '../components/Post';

import { htmlDecode } from '../utils/htmlDecode';
import {
  StyledHeading,
  StyledContainer,
  StyledLink,
} from '../components/StyledComponents/StyledComponents.styled';
function Posts() {
  const posts = useLoaderData();
  const [isLoggedIn] = useOutletContext();

  if (!isLoggedIn)
    return (
      <StyledContainer>
        <StyledHeading>
          Please log in first: <StyledLink to={'/login'}>here</StyledLink>
        </StyledHeading>
      </StyledContainer>
    );
  return (
    <>
      <StyledHeading>Posts: </StyledHeading>
      {posts.length === 0 && <p>There is no posts</p>}
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={htmlDecode(post.title)}
          content={htmlDecode(post.content)}
          isPublished={post.isPublished}
        />
      ))}
    </>
  );
}
export default Posts;
