import React from 'react'
import { Div, Lista, Li, H2, Link } from './styles'


export const HeaderMenu = () =>{
    return(
        <Div>
            <Lista>
                <Link to ='/category/action' onClick={() => setState('none')}>
                    <Li image={'https://st-listas.20minutos.es/images/2014-12/391061/4600591_640px.jpg?1518457160'}>
                    <H2 >Accion</H2>
                    </Li>
                </Link>
                <Link to='/category/mystery' onClick={() => setState('none')}>
                    <Li image={'https://i.pinimg.com/originals/e9/33/d9/e933d9911b72c0cb65d6304982863da1.jpg'}>
                    <H2>Terror</H2>
                    </Li>
                </Link>
                <Link to='/category/animation' onClick={() => setState('none')}>
                    <Li image={'https://st-listas.20minutos.es/images/2009-11/163808/1824636_640px.jpg?1272222432'}>
                    <H2>Animadas</H2>
                    </Li>
                </Link>
                <Link to='/category/all' onClick={() => setState('none')}>
                    <Li image={'https://i.pinimg.com/236x/39/d1/01/39d101063c4e217323df91b0551175af.jpg'}>
                    <H2>Populares</H2>
                    </Li>
                </Link>
            </Lista>
        </Div>
    )
}