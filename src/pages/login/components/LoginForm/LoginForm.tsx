import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Button from "../../../../components/Button/Button";
import FormTextInput from "../../../../components/Form/components/FormTextInput/FormTextInput";
import Form from "../../../../components/Form/Form";
import {
  loginAsync,
  processingLogin,
} from "../../../../redux/reducers/userReducer";
import { LoginFormInputName } from "./enums/LoginFormInputName";
import { RequestStatus } from "../../../../types/RequestStatus";

const Header = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export interface LoginInput {
  [LoginFormInputName.LOGIN]: string;
  [LoginFormInputName.PASSWORD]: string;
}

const LoginForm = () => {
  const status = useAppSelector(processingLogin);
  const dispatch = useAppDispatch();

  const onSubmit = (input: LoginInput) => {
    dispatch(loginAsync(input));
  };

  const handleValidate = (value: string) =>
    value?.trim() ? undefined : "This is field is required";

  return (
    // Using generic here prevents wrong onSubmit arguments
    // Used https://codesandbox.io/s/github/final-form/react-final-form/tree/master/examples/field-level-validation?file=/index.js:1452-1800
    // for getting used to React Final forms and wrapping it in custom form component
    <Form<LoginInput> onSubmit={onSubmit}>
      <Header>Please login</Header>
      <FormTextInput
        label="Login"
        placeholder="Enter login"
        name={LoginFormInputName.LOGIN}
        onValidate={handleValidate}
      />
      <FormTextInput
        label="Password"
        placeholder="Enter Password"
        name={LoginFormInputName.PASSWORD}
        onValidate={handleValidate}
        type="password"
      />
      <ButtonContainer>
        <Button
          type="submit"
          value="Login"
          loading={status === RequestStatus.LOADING}
        />
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
