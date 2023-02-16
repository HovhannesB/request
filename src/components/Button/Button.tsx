import ReactLoading from "react-loading";
import styled from "styled-components";
import { ButtonVariants } from "../../ThemeProvider";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
`;

const ButtonElement = styled.input<{
  variant: ButtonVariants;
  compact: boolean;
}>`
  min-width: ${(props) => (props.compact ? "60px" : "100px")};
  padding: ${(props) => (props.compact ? "8px" : "12px")};
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.buttonVariants[props.variant]};
  font-weight: bold;
  font-size: ${(props) => (props.compact ? "14px" : "16x")};
  color: ${(props) =>
    props.variant === ButtonVariants.TRANSPARENT ? "grey" : "white"};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

interface Props {
  type: "button" | "submit";
  variant: ButtonVariants; // and other types of buttons
  value: string;
  loading: boolean;
  compact: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type,
  value,
  variant,
  loading,
  className,
  compact,
  onClick,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ReactLoading type="spin" color="green" height="30px" width="30px" />
      </LoadingContainer>
    );
  }

  return (
    <ButtonElement
      type={type}
      value={value}
      variant={variant}
      onClick={handleClick}
      className={className}
      compact={compact}
    />
  );
};

Button.defaultProps = {
  type: "button",
  variant: ButtonVariants.POSITIVE,
  loading: false,
  compact: false,
};

export default Button;
