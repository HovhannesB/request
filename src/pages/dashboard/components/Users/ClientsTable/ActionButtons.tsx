import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RemoveModal from "../../Modals/RemoveModal";
import EditModal from "../../Modals/EditModal";

interface Props {
  clientId: string;
}

const StyledEditIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.grey};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const StyledTrashIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  color: ${(props) => props.theme.negativeColor};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButtons = ({ clientId }: Props) => {
  const [removeModalShown, setRemoveModalShown] = useState(false);
  const [editModalShown, setEditModalShown] = useState(false);

  const showRemoveModal = () => {
    setRemoveModalShown(true);
  };

  const handleHideRemove = () => {
    setRemoveModalShown(false);
  };

  const showEditModal = () => {
    setEditModalShown(true);
  };

  const handleHideEdit = () => {
    setEditModalShown(false);
  };

  return (
    <>
      <StyledEditIcon icon={faPencil} onClick={showEditModal} />
      <StyledTrashIcon icon={faTrash} onClick={showRemoveModal} />
      {editModalShown &&
        createPortal(
          <EditModal clientId={clientId} onHideEdit={handleHideEdit} />,
          document.body
        )}
      {removeModalShown &&
        createPortal(
          <RemoveModal clientId={clientId} onHideRemove={handleHideRemove} />,
          document.body
        )}
    </>
  );
};

export default ActionButtons;
