import { ReactNode } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border-radius: 8px;
  background-color: white;
  min-width: 250px;
  min-height: 300px;
  overflow: hidden;
`;

interface Props {
  onHide: () => void;
  children: ReactNode;
}

const ModalWindow = ({ children, onHide }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper onClick={onHide}>
      <Container onClick={handleClick}>{children}</Container>
    </ModalWrapper>
  );
};

export default ModalWindow;
