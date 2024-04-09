import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeading,
  StyledLink,
} from '../components/StyledComponents/StyledComponents.styled';
import {
  StyledForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  CheckBox,
  SubmitButton,
} from '../components/StyledComponents/Form.styled';
export default function NewPost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isPublished: false,
  });

  const [isLoggedIn] = useOutletContext();
  if (!isLoggedIn)
    return (
      <StyledHeading>
        Please log in first: <StyledLink to={'/login'}>here</StyledLink>
      </StyledHeading>
    );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div>
      <StyledHeading>Create new Post</StyledHeading>
      <StyledForm method="POST">
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content:</Label>
          <Textarea
            style={{ height: '40vh' }}
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            minLength={3}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Publish: {'  '}
            <CheckBox type="hidden" name="isPublished" value="false" />
            <CheckBox
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              value="true"
            />
          </Label>
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </div>
  );
}
