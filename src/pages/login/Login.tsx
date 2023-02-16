import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/reducers/userReducer";
import LoginForm from "./components/LoginForm/LoginForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const Login = () => {
  const user = useAppSelector(selectUser);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </Container>
  );
};

export default Login;
