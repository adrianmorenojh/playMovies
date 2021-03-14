import React, { useEffect, useState } from "react";
import { Container, Form, Input, Div, H2, P, Button } from "./styles";
import { useNavigate, Link } from "@reach/router";
import useUser from "../../Hooks/useUser";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLogged, isLoginLoading, hasLogingError } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/", { replace: true });
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <Container>
      <Div>
        <H2>Login </H2>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoginLoading ? (
            <Button disabled="disabled">Login</Button>
          ) : (
            <Button>Login</Button>
          )}
        </Form>
        {hasLogingError && <strong>Credentials are invalid</strong>}
        <P>
          don't have a account? <Link to="/register">Sing up</Link>
        </P>
      </Div>
    </Container>
  );
};
