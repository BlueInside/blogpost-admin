import PropTypes from 'prop-types';

export default function Post({ id, title, content, isPublished }) {
  return (
    <div key={id}>
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
