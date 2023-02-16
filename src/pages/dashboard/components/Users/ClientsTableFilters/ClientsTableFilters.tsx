import styled from "styled-components";
import CheckboxInput from "../../../../../components/CheckboxInput/CheckboxInput";
import TextInput from "../../../../../components/TextInput/TextInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

interface Props {
  isBanned: boolean;
  searchQuery: string;
  onChangeIsBanned: (checked: boolean) => void;
  onChangeSearchQuery: (value: string) => void;
}

const ClientsTableFilters = ({
  isBanned,
  searchQuery,
  onChangeIsBanned,
  onChangeSearchQuery,
}: Props) => {
  return (
    <Container>
      <TextInput
        value={searchQuery}
        onChange={onChangeSearchQuery}
        placeholder="Search by name"
      />
      <CheckboxInput
        checked={isBanned}
        onChange={onChangeIsBanned}
        label="Is banned"
      />
    </Container>
  );
};

export default ClientsTableFilters;
