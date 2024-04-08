import { Form } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
export default function EditPostForm({
  handleCancelEdit,
  title,
  content,
  isPublished,
  timeStamp,
}) {
  // Form
  const [formData, setFormData] = useState({
    title: title || '',
    content: content || '',
    isPublished: isPublished || false,
    // Changes 2024-03-28T11:47:02.249Z into 2024-03-28
    timeStamp: `${timeStamp}`.toString().split('T')[0] || new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <Form>
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
        <input
          type="checkbox"
          id="isPublished"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="timeStamp">Time Stamp:</label>
        <input
          type="date"
          id="timeStamp"
          name="timeStamp"
          defaultValue={formData.timeStamp}
          required
        />
      </div>
      <button
        type="button"
        onClick={() => {
          if (confirm('Are you sure you want to lose the changes?')) {
            handleCancelEdit();
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
  handleCancelEdit: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  isPublished: PropTypes.bool,
  timeStamp: PropTypes.string,
};
