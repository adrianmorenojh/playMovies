import React, { useState, useContext, useCallback } from 'react'
import { Container, Div, H1, Form, Input, Button } from './styles'
import { Context } from '../../Context/ContextAuth'

export const Register = React.memo(() => {
  const { activateAuth } = useContext(Context)

  const [state, setState] = useState({
    data: {
      name: '',
      user: '',
      email: '',
      password: ''
    }
  })
  const [login, setLogin] = useState({
    data: {
      user: '',
      password: ''
    }
  })
  const handleChange = event => {
    setState({
      data: {
        ...state.data,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = useCallback(event => {
    event.preventDefault()
    activateAuth(state)
  }, [state])

  const loginSubmit = event => {
    event.preventDefault()
    activateAuth(login)
  }
  const loginChange = event => {
    setLogin({
      data: {
        ...login.data,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <Container>
      <Div>
        <H1>Registrarse</H1>
        <Form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Nombre' value={state.data.name} name='name' onChange={handleChange} />
          <Input type='text' placeholder='usuario' value={state.data.user} name='user' onChange={handleChange} />
          <Input type='email' placeholder='Email' value={state.data.email} name='email' onChange={handleChange} />
          <Input type='password' placeholder='contraseña' value={state.data.password} name='password' onChange={handleChange} />
          <Button>Registrarse</Button>
        </Form>
      </Div>
      <Div>
        <H1>Iniciar Sesion</H1>
        <Form onSubmit={loginSubmit}>
          <Input type='text' placeholder='usuario' value={login.data.user} name='user' onChange={loginChange} />
          <Input type='password' placeholder='contraseña' value={login.data.password} name='password' onChange={loginChange} />
        </Form>
        <Button>Iniciar Sesion</Button>
      </Div>
    </Container>

  )
})
