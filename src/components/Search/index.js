import React, { useState } from 'react'
import { Buscador, Input, Submit } from './styles.js'
import { Link } from '@reach/router'

export const Search = ({ setState }) => {
  const [pelicula, setPelicula] = useState({ value: '' })

  const handleChange = event => {
    setPelicula({ value: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
  }
  // al darle click le pasamos al menu display 'none' mediante el state

  const handleClick = event => {
    setState('none')
  }
  return (
    <Buscador onSubmit={handleSubmit}>
      <Input type='search' placeholder='Buscar Pelicula' value={pelicula.value} onChange={handleChange} />
      <Link to={`/results/${pelicula.value}`}>
        <Submit type='submit' value='submit' placeholder='enviar' onClick={handleClick} />
      </Link>
    </Buscador>
  )
}
