import { Form } from 'react-router-dom';

export default function LoginForm() {
  return (
    <>
      <Form method="post">
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </Form>
    </>
  );
}
