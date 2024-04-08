import { useLoaderData, Form } from 'react-router-dom';

export default function PostComments() {
  const comments = useLoaderData();

  const confirmDeletion = (e) => {
    if (!confirm('Are you sure to delete this comment?')) {
      e.preventDefault();
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>
            {' '}
            <b>{comment.username}:</b>{' '}
          </p>
          <span>
            {comment.text}
            <Form
              method="delete"
              action={`${comment._id}`}
              onSubmit={confirmDeletion}
            >
              <button type="submit">Delete</button>
            </Form>
          </span>
        </div>
      ))}
    </div>
  );
}
