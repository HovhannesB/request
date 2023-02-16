import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { TextInputType } from "../../../TextInput/TextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

const StyledLabel = styled.label`
  padding-bottom: 6px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColors.grey};
  line-height: 35px;
  padding: 0 10px;
  font-size: 16px;

  ::placeholder {
    color: grey;
  }
`;

const Error = styled.span`
  height: 13px;
  padding-top: 4px;
  font-size: 13px;
  color: ${(props) => props.theme.negativeColor};
`;

interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  onValidate?: (data: string) => string | undefined;
  type: TextInputType;
}

const FormTextInput = ({
  name,
  type,
  label,
  placeholder,
  onValidate,
}: Props) => {
  return (
    <Field name={name} validate={onValidate}>
      {({ input, meta }) => (
        <Container>
          {label && <StyledLabel>{label}</StyledLabel>}
          <StyledInput type={type} {...input} placeholder={placeholder} />
          <Error>{meta.error && meta.touched && meta.error}</Error>
        </Container>
      )}
    </Field>
  );
};

FormTextInput.defaultProps = {
  type: "text",
};

export default FormTextInput;
