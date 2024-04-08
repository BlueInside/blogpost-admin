import { Form, useSubmit } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { htmlDecode } from '../utils/htmlDecode';
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
    <Form
      method="PUT"
      onSubmit={(event) => {
        submit(event.currentTarget);
        closeEditForm();
      }}
    >
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="isPublished">Is Published:</label>
        {/* If checkbox is not checked sends hidden value */}
        <input type="hidden" value="false" name="isPublished" />
        <input
          type="checkbox"
          id="isPublished"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleCheckboxChange}
          value="true"
        />
      </div>
      <button
        type="button"
        onClick={() => {
          if (confirm('Are you sure you want to lose the changes?')) {
            closeEditForm();
          } else return;
        }}
      >
        Cancel
      </button>
      <button type="submit">Submit</button>
    </Form>
  );
}

EditPostForm.propTypes = {
  closeEditForm: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  isPublished: PropTypes.bool,
  timeStamp: PropTypes.string,
};
