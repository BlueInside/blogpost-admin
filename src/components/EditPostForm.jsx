import { useSubmit } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { htmlDecode } from '../utils/htmlDecode';
import {
  StyledForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  CheckboxContainer,
  CheckboxLabel,
  CancelButton,
  SubmitButton,
  CheckBox,
} from './StyledComponents/Form.styled';
export default function EditPostForm({
  closeEditForm,
  title,
  content,
  isPublished,
}) {
  // Form
  const [formData, setFormData] = useState({
    title: htmlDecode(title) || '',
    content: htmlDecode(content) || '',
    isPublished: isPublished || false,
  });
  // Imperative form submit
  const submit = useSubmit();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <StyledForm
      method="PUT"
      onSubmit={(event) => {
        submit(event.currentTarget);
        closeEditForm();
      }}
    >
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup style={{ height: '40vh' }}>
        <Label htmlFor="content">Content:</Label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <CheckboxContainer>
          <CheckboxLabel htmlFor="isPublished">Is Published:</CheckboxLabel>
          {/* If checkbox is not checked sends hidden value */}
          <Input type="hidden" value="false" name="isPublished" />
          <CheckBox
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleCheckboxChange}
            value="true"
          />
        </CheckboxContainer>
      </FormGroup>
      <CancelButton
        type="button"
        onClick={() => {
          if (confirm('Are you sure you want to lose the changes?')) {
            closeEditForm();
          } else return;
        }}
      >
        Cancel
      </CancelButton>
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}

EditPostForm.propTypes = {
  closeEditForm: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  isPublished: PropTypes.bool,
  timeStamp: PropTypes.string,
};
