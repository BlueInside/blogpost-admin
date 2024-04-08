import { useLoaderData, Outlet } from 'react-router-dom';
import { useState } from 'react';
import EditPostForm from '../components/EditPostForm';

export default function PostDetails() {
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const post = useLoaderData();

  if (!post) return <p>Post not found</p>;
  if (isEditing)
    return <EditPostForm {...post} closeEditForm={() => setIsEditing(false)} />;
  return (
    <div>
      <h1>{post.title}</h1>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <div>
        <span>{post.author.fullname} </span>
        <span>{post.formattedTimeStamp} </span>
        <span>Published: {post.isPublished ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div>
        <p>Number of comments: {post.comments.length}</p>
        <button onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide' : 'Show'} comments.
        </button>
        {showComments && <Outlet />}
      </div>
    </div>
  );
}
