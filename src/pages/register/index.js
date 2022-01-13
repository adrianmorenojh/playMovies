import React, { useState } from 'react'
import registerService from '../../services/register'
import { Container, Div, Form, Input, Button, H2, H1, P } from './styles'
import { useForm } from 'react-hook-form'
import { Link } from '@reach/router'
export const Register = () => {
  const { handleSubmit, register, errors } = useForm()

  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (values) => {
    setIsSubmitting(true)
    registerService(values).then(() => {
      setRegistered(true)
      setIsSubmitting(false)
    })
  }

  if (registered) {
    return <H1>Felicidades ✅, Te has registrado correctamente!</H1>
  }

  return (
    <Container>
      <Div>
        <H2>Registro</H2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='username'
            placeholder='Nombre de usuario'
            ref={register({ required: 'Campo requerido' })}
          />

          <Input
            name='password'
            placeholder='Contraseña'
            ref={register({ required: 'Campo requerido' })}
            type='password'
          />

          {isSubmitting ? (
            <Button disabled='disabled'>Registrarse</Button>
          ) : (
            <Button>Registrarse</Button>
          )}
        </Form>
        <P>
         ya tienes una cuenta? <Link to='/login'>Inicia sesion</Link>
        </P>
      </Div>
    </Container>
  )
}
