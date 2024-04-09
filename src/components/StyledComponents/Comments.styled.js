import styled from 'styled-components';

export const CommentsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;
`;

export const Username = styled.b`
  flex: 1;
  color: ${({ theme }) => theme.colors.primaryPink};
`;
