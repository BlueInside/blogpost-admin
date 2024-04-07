import { Form, useActionData } from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm() {
  const errors = useActionData();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <>
      {errors?.response && <p>{errors.response}</p>}
      <Form method="post">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors?.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors?.password && <p>{errors.password}</p>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </Form>
    </>
  );
}
