import styled from "styled-components";

const Container = styled.label`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckboxLabel = styled.span`
  padding-left: 10px;
`;

interface Props {
  checked: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const CheckboxInput = ({ checked, label, onChange }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Boolean((e.target as any).checked));
    }
  };

  return (
    <Container>
      <StyledInput type="checkbox" checked={checked} onChange={handleChange} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </Container>
  );
};

CheckboxInput.defaultProps = {
  type: "text",
};

export default CheckboxInput;
