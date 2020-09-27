import React, {useState} from 'react'
import {Image, Container} from './styles'

import { ImUser } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { Link} from '@reach/router'

export const MobileMenu = () => {

    const [state, setState] = useState({home: '#A0A5AB', 
        user:'#A0A5AB'});

     return(
        <Container>
            <Link to='/' >
                <AiFillHome onClick={() => setState({home: 'white', user:'#A0A5AB'})} size='35px' color={state.home} />
            </Link>

            <Link to='/user'>
                <Image>
                    <ImUser  onClick={() => setState({home: '#A0A5AB', user:'white'})} size= '35px' color= {state.user} />
                </Image>
            </Link>

        </Container>
    )
}
