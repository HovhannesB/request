import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid grey;
  font-size: 20px;
  background-color: #dedede;
`;

const StyledCloseIcon = styled(FontAwesomeIcon)`
  color: grey;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

interface Props {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: Props) => {
  return (
    <Container>
      {title} <StyledCloseIcon icon={faClose} onClick={onClose} />
    </Container>
  );
};

export default ModalHeader;
