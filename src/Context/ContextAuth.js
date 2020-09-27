import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = React.memo(({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('user')
  })

  const value = {
    isAuth,
    activateAuth: info => {
      setIsAuth(true)
      window.sessionStorage.setItem('user', JSON.stringify(info))
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('user')
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
)
export default {
  Provider,
  Consumer: Context.Consumer
}
