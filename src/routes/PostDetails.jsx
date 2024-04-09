import { useLoaderData, Outlet } from 'react-router-dom';
import { useState } from 'react';
import EditPostForm from '../components/EditPostForm';
import { htmlDecode } from '../utils/htmlDecode';
import {
  PostContainer,
  Title,
  FlexContainer,
  EditButton,
  MetadataContainer,
  MetadataItem,
  Content,
} from '../components/StyledComponents/PostDetails.styled';
export default function PostDetails() {
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const post = useLoaderData();

  if (!post) return <p>Post not found</p>;
  if (isEditing)
    return <EditPostForm {...post} closeEditForm={() => setIsEditing(false)} />;
  return (
    <PostContainer>
      <FlexContainer>
        <Title>{post.title}</Title>
        <EditButton onClick={() => setIsEditing(!isEditing)}>Edit</EditButton>
      </FlexContainer>
      <MetadataContainer>
        <MetadataItem>{htmlDecode(post.author.fullname)} </MetadataItem>
        <MetadataItem>{post.formattedTimeStamp} </MetadataItem>
        <MetadataItem>
          Published: {post.isPublished ? 'Yes' : 'No'}
        </MetadataItem>
      </MetadataContainer>
      <Content>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{htmlDecode(post.content)}</pre>
      </Content>
      <div>
        <p>Number of comments: {post.comments.length}</p>
        <button onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide' : 'Show'} comments.
        </button>
      </div>
      {showComments && <Outlet />}
    </PostContainer>
  );
}
