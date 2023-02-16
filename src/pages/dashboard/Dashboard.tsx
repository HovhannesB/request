import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/reducers/userReducer";
import { getUserFullName } from "../../utils/getUserFullName";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #330066;
`;

const SideBar = styled.div`
  width: 30%;
  height: 100vh;
  padding: 25px;
  font-size: 20px;
`;

const UserName = styled.div`
  margin-bottom: 20px;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #330066;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Main = styled.div`
  width: 70%;
  padding: 10px;
  border-top-left-radius: 20px;
  background-color: #dedede;
`;

const LogoutContainer = styled.div`
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Dashboard = () => {
  const user = useAppSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <SideBar>
        <UserName>{getUserFullName(user)}</UserName>
        <NavigationContainer>
          <StyledNavLink to="/dashboard/users">Users</StyledNavLink>
          <StyledNavLink to="/dashboard/products">Products</StyledNavLink>
        </NavigationContainer>
        <LogoutContainer>Log Out</LogoutContainer>
      </SideBar>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Dashboard;
