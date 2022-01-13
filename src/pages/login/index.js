import React, { useEffect, useState } from 'react'
import { Container, Form, Input, Div, H2, P, Button } from './styles'
import { useNavigate, Link } from '@reach/router'
import useUser from '../../Hooks/useUser'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login, isLogged, isLoginLoading, hasLogingError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/', { replace: true })
  }, [isLogged])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <Container>
      <Div>
        <H2>Inicio de Sesion</H2>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder='Nombre de usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='Contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoginLoading ? (
            <Button disabled='disabled'>Iniciar Sesion</Button>
          ) : (
            <Button>Iniciar Sesion</Button>
          )}
        </Form>
        {hasLogingError && <strong>Credenciales invalidas</strong>}
        <P>
          No tienes una cuenta? <Link to='/register'>Registrate!</Link>
        </P>
      </Div>
    </Container>
  )
}
