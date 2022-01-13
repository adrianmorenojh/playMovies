import React, { useState, useContext } from 'react'
import { Image, Container } from './styles'

import { ImUser } from 'react-icons/im'
import { AiFillHome } from 'react-icons/ai'
import { IoIosTime } from 'react-icons/io'
import { Link } from '@reach/router'
import Context from '../../Context/userContext'

export const MobileMenu = () => {
  const { isAuth } = useContext(Context)
  const [state, setState] = useState({
    home: '#A0A5AB',
    user: '#A0A5AB',
    watchLater: '#A0A5AB'
  })

  return (
    <Container>
      <Link to='/'>
        <AiFillHome onClick={() => setState({ home: 'white', user: '#A0A5AB', watchLater: 'A0A5AB' })} size='32px' color={state.home} />
      </Link>
      <Link to='/watchlater'>
        <IoIosTime onClick={() => setState({ home: '#A0A5AB', user: '#A0A5AB', watchLater: 'white' })} size='32px' color={state.watchLater} />
      </Link>
      {isAuth ? (
        <Link to='/user'>
          <Image>
            <ImUser onClick={() => setState({ home: '#A0A5AB', user: 'white', watchLater: '#A0A5AB' })} size='32px' color={state.user} />
          </Image>
        </Link>
      ) : (
        <Link to='/login'>
          <Image>
            <ImUser onClick={() => setState({ home: '#A0A5AB', user: 'white', watchLater: '#A0A5AB' })} size='32px' color={state.user} />
          </Image>
        </Link>
      )}

    </Container>
  )
}
