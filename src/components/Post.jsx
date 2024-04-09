import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  PostContainer,
  Title,
  Content,
} from './StyledComponents/StyledComponents.styled';
export default function Post({ id, title, content, isPublished }) {
  const navigate = useNavigate();
  return (
    <PostContainer key={id} onClick={() => navigate(`${id}`)}>
      <Title>{title}</Title>
      <p>Published: {isPublished ? '✅' : '❌'}</p>
      <Content>{content}</Content>
    </PostContainer>
  );
}

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  isPublished: PropTypes.bool,
};
