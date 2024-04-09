import { useLoaderData, Form } from 'react-router-dom';
import { htmlDecode } from '../utils/htmlDecode';
import {
  CommentsContainer,
  CommentContainer,
  Username,
} from '../components/StyledComponents/Comments.styled';

export default function PostComments() {
  const comments = useLoaderData();

  const confirmDeletion = (e) => {
    if (!confirm('Are you sure to delete this comment?')) {
      e.preventDefault();
    }
  };

  return (
    <CommentsContainer>
      {comments.map((comment) => (
        <CommentContainer key={comment._id}>
          <div style={{ display: 'flex' }}>
            {' '}
            <Username>{htmlDecode(comment.username)}:</Username>{' '}
            <Form
              method="delete"
              action={`${comment._id}/delete`}
              onSubmit={confirmDeletion}
            >
              <button type="submit">X</button>
            </Form>
          </div>
          <span>{htmlDecode(comment.text)}</span>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
