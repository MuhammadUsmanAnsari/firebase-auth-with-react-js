import React, { createContext, useState } from 'react'
export const AuthContext=createContext()


export default function AuthContextProvider(props) {

    const [isAuthenticated,setAuthentication]=useState(false)

  return (
    <>
    <AuthContext.Provider value={{isAuthenticated,setAuthentication}}>
        {props.children}
    </AuthContext.Provider>
    </>
  )
}
