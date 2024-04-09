import { useActionData } from 'react-router-dom';
import { useState } from 'react';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
} from './StyledComponents/StyledComponents.styled';
import { StyledHeading } from './StyledComponents/StyledComponents.styled';
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
      <FormContainer method="post">
        <StyledHeading>Login</StyledHeading>
        <FormGroup>
          <Label htmlFor="username">Username: </Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors?.username && <p>{errors.username}</p>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password: </Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors?.password && <p>{errors.password}</p>}
        </FormGroup>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </FormContainer>
    </>
  );
}
