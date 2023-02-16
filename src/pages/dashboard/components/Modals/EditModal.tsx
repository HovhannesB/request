import ModalHeader from "../../../../components/ModalWIndow/ModalHeader";
import ModalWindow from "../../../../components/ModalWIndow/ModalWindow";
import EditForm from "../EditForm/EditForm";

interface Props {
  clientId: string;
  onHideEdit: () => void;
}

const EditModal = ({ clientId, onHideEdit }: Props) => {
  return (
    <ModalWindow onHide={onHideEdit}>
      <ModalHeader title="Edit user" onClose={onHideEdit}></ModalHeader>
      <EditForm clientId={clientId} onHideEdit={onHideEdit} />
    </ModalWindow>
  );
};

export default EditModal;
