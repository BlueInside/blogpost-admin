import { Form } from 'react-router-dom';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  padding: 10px;
`;

export const Textarea = styled.textarea`
  height: 100%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
  min-width: fit-content;
  font-size: 1.4rem;
`;

export const CheckBox = styled.input`
  width: 35px;
  height: 35px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
