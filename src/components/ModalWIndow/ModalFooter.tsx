import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px 10px;
  border-top: 1px solid grey;
  margin-top: auto;
`;

interface Props {
  children: ReactNode;
  className?: string
}

const ModalFooter = ({ children, className }: Props) => {
  return <Container className={className}>{children}</Container>;
};

export default ModalFooter;
