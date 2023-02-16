import styled from "styled-components";

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

export type TextInputType = "text" | "password";

interface Props {
  placeholder?: string;
  type: TextInputType;
  value: string;
  onChange?: (value: string) => void;
}

const TextInput = ({ type, placeholder, value, onChange }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange((e.target as any).value);
    }
  };

  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
