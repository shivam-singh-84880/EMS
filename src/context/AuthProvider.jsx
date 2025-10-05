import React, { createContext, useState, useEffect } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    //localStorage.clear()
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
      SetLocalStorage()
      const {employees,admin} = GetLocalStorage()
      setUserData({employees,admin})
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider