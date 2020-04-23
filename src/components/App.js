import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { Header } from './Header'
import { Home } from './Home'
import { Router } from '@reach/router'
import { Detail } from '../pages/Detail'
import { MovieList } from './MovieList'
import { Results } from './Results'

export default () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path='/' />
        <Detail path='/detail/:id/' />
        <MovieList path='/category/:category/' />
        <Results path='/results/:search' />

      </Router>
    </>
  )
}
