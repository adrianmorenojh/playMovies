import React, { useState } from 'react'
import { Container, Div, H1, Form, Input, Button } from './styles'
export const Register = () => {
  // const [logIn, setLogIn] = useState({
  //   data: {
  //     user: '',
  //     password: ''
  //   }
  // })
  const [state, setState] = useState({
    register: {
      name: '',
      user: '',
      email: '',
      password: ''
    }
  })
  const handleChange = event => {
    setState({
      register: {
        ...state.register,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    window.localStorage.setItem(state.register.user, JSON.stringify(state))
  }
  console.log(window.localStorage.getItem(state.register.user))

  return (
    <Container>
      <Div>
        <H1>Registrarse</H1>
        <Form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Nombre' value={state.register.name} name='name' onChange={handleChange} />
          <Input type='text' placeholder='usuario' value={state.register.user} name='user' onChange={handleChange} />
          <Input type='email' placeholder='Email' value={state.register.email} name='email' onChange={handleChange} />
          <Input type='password' placeholder='contraseña' value={state.register.password} name='password' onChange={handleChange} />
          <Button>Registrarse</Button>
        </Form>
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
