import React from 'react'
import { Carousel, Peliculas, Item } from './styles'

import { Loading } from '../../styles/Loading'
import { UseFetchData } from '../../Hooks/useFetchData'
import { Link } from '@reach/router'

export const Carrusel = ({category}) => {
    const { state } = UseFetchData({category})
    console.log(state)
    return(state.status === 'ok' ? 
    <Carousel>
        <Peliculas>
            {
                state.data.movies.map(movie => <Link to ={`/detail/${movie.id}`} key={movie.id}><Item src={movie.medium_cover_image} key={movie.id} /></Link>)
            }
        </Peliculas>
    </Carousel>
    : state.status ==='error' ? <h1>Lo sentimos, Ha ocurrido un error</h1>
    :<Loading />
    )
}
