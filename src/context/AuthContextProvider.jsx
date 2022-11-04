import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({childeren}) => {
  const [currentUser, setCurrentUser] = useState(false)
  return (
    <AuthContext.Provider value={currentUser}>{childeren}</AuthContext.Provider>
  )
}

export default AuthContextProvider