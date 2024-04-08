import { Form, useOutletContext, Link } from 'react-router-dom';
import { useState } from 'react';

export default function NewPost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isPublished: false,
  });

  const [isLoggedIn] = useOutletContext();
  if (!isLoggedIn)
    return (
      <h1>
        Please log in first: <Link to={'/login'}>here</Link>
      </h1>
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
      <h1>Create new Post</h1>
      <Form method="POST">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>
        <div>
          <label>
            Publish:
            <input type="hidden" name="isPublished" value="false" />
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              value="true"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
