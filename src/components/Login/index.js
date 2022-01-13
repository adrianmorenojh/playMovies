import React, { useContext } from 'react'
import { Link, Div } from './styles'

import useUser from '../../Hooks/useUser'
import Context from '../../Context/userContext'
export const Login = () => {
  const { logout } = useUser()
  const { isAuth } = useContext(Context)

  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <Div>
      {isAuth ? (
        <Link to='/' onClick={handleClick}>
          Cerrar sesion
        </Link>
      ) : (
        <Link to='/login'>Iniciar sesion</Link>
      )}
    </Div>
  )
}
