import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import ModalFooter from "../../../../components/ModalWIndow/ModalFooter";
import ModalHeader from "../../../../components/ModalWIndow/ModalHeader";
import ModalWindow from "../../../../components/ModalWIndow/ModalWindow";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  removeClientAsync,
  selectClients,
} from "../../../../redux/reducers/clientsReducer";
import { ButtonVariants } from "../../../../ThemeProvider";
import { RequestStatus } from "../../../../types/RequestStatus";

const StyledModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const Message = styled.div`
  width: 250px;
  padding: 30px;
  text-align: center;
`;

interface Props {
  clientId: string;
  onHideRemove: () => void;
}

const RemoveModal = ({ clientId, onHideRemove }: Props) => {
  const { removeStatus } = useAppSelector(selectClients);
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeClientAsync(clientId)).then(() => {
      onHideRemove();
    });
  };

  return (
    <ModalWindow onHide={onHideRemove}>
      <ModalHeader title="Remove user" onClose={onHideRemove}></ModalHeader>
      <Message>Are you sure you want to remove this user?</Message>
      <StyledModalFooter>
        <Button
          variant={ButtonVariants.TRANSPARENT}
          value="Cancel"
          onClick={onHideRemove}
          compact
        />
        <StyledButton
          variant={ButtonVariants.NEGATIVE}
          onClick={handleRemove}
          value="Remove"
          loading={removeStatus === RequestStatus.LOADING}
          compact
        />
      </StyledModalFooter>
    </ModalWindow>
  );
};

export default RemoveModal;
