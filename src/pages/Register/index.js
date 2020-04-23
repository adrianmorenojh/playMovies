import React from 'react'
import { Container, Div, H1, Form, Input, Button } from './styles'
export const Register = () => {
  return (
    <Container>
      <Div>
        <H1>Registrarse</H1>
        <Form>
          <Input type='text' placeholder='Nombre' />
          <Input type='text' placeholder='Apellidos' />
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='contraseña' />
        </Form>
        <Button>Registrarse</Button>
      </Div>
      <Div>
        <H1>Iniciar Sesion</H1>
        <Form>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='contraseña' />
        </Form>
        <Button>Iniciar Sesion</Button>
      </Div>
    </Container>

  )
}
