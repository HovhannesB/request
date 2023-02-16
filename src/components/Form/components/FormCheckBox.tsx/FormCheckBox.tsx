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
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  type: TextInputType;
}

const FormCheckBox = ({ name, label }: Props) => {
  return (
    <Field name={name} type="checkbox">
      {({ input }) => (
        <Container>
          {label && (
            <StyledLabel>
              <StyledInput type="checkbox" {...input} />
              {label}
            </StyledLabel>
          )}
        </Container>
      )}
    </Field>
  );
};

FormCheckBox.defaultProps = {
  type: "text",
};

export default FormCheckBox;
