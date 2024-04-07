import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export default function Post({ id, title, content, isPublished }) {
  const navigate = useNavigate();
  return (
    <div key={id} onClick={() => navigate(`${id}`)}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Published: {isPublished ? '✅' : '❌'}</p>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  isPublished: PropTypes.bool,
};
