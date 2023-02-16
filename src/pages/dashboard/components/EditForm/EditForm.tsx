import { omit } from "lodash";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import FormCheckBox from "../../../../components/Form/components/FormCheckBox.tsx/FormCheckBox";
import FormTextInput from "../../../../components/Form/components/FormTextInput/FormTextInput";
import Form from "../../../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  editClientsAsync,
  selectClients,
} from "../../../../redux/reducers/clientsReducer";
import { ButtonVariants } from "../../../../ThemeProvider";
import { Client } from "../../../../types/Client";
import { RequestStatus } from "../../../../types/RequestStatus";

const Container = styled.div`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  padding: 0 10px;
`;

enum UserForm {
  NAME = "name",
  AVATAR = "avatar",
  ISBANNED = "isBanned",
}

type EditFormData = Omit<Client, "registeredAt">;

interface Props {
  clientId: string;
  onHideEdit: () => void;
}

const EditForm = ({ clientId, onHideEdit }: Props) => {
  const dispatch = useAppDispatch();
  const { clients, editStatus } = useAppSelector(selectClients);

  const client = clients.find((client) => client.id === clientId);

  const handleEdit = (data: EditFormData) => {
    dispatch(editClientsAsync(data)).then(() => {
      onHideEdit();
    });
  };

  const handleValidate = (value: string) =>
    value?.trim() ? undefined : "This is field is required";

  if (!client) {
    return null;
  }

  return (
    <Container>
      <Form onSubmit={handleEdit} initialValues={omit(client, "registeredAt")}>
        <FormTextInput
          label="User name"
          placeholder="User name"
          name={UserForm.NAME}
          onValidate={handleValidate}
        />
        <FormTextInput
          label="Avatar Url"
          placeholder="Avatar Url"
          name={UserForm.AVATAR}
          onValidate={handleValidate}
        />
        <FormCheckBox name={UserForm.ISBANNED} label="is Banned" />
        <ButtonContainer>
          <Button
            variant={ButtonVariants.TRANSPARENT}
            value="Cancel"
            onClick={onHideEdit}
            compact
          />
          <Button
            type="submit"
            value="Edit"
            loading={editStatus === RequestStatus.LOADING}
            compact
          />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default EditForm;
