import React, { useState } from "react";
import registerService from "../../services/register";
import { Container, Div, Form, Input, Button, H2, H1 } from "./styles";
import { useForm } from "react-hook-form";

export const Register = () => {
  const { handleSubmit, register, errors } = useForm();

  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values) => {
    setIsSubmitting(true);
    registerService(values).then(() => {
      setRegistered(true);
      setIsSubmitting(false);
    });
  };

  if (registered) {
    return <H1>Congratulations ✅! You've been successfully registered!</H1>;
  }

  return (
    <Container>
      <Div>
        <H2>Register</H2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="username"
            placeholder="Put here the username"
            ref={register({ required: "This is required" })}
          />

          <Input
            name="password"
            placeholder="Put here the password"
            ref={register({ required: "This is required" })}
            type="password"
          />

          {isSubmitting ? (
            <Button disabled="disabled">Login</Button>
          ) : (
            <Button>Login</Button>
          )}
        </Form>
      </Div>
    </Container>
  );
};
