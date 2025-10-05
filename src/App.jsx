import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
 const [user, setUser] = useState(null) 
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const authData = useContext(AuthContext)

 
 useEffect(() => {
   const loggedInUser = localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
   }
 },[])
 
 
 
 const handleLogin = (email,password) => {
  if(authData){
    const employee = authData.employees.find((e)=>e.email == email && e.password == password)

    const admin = authData.admin.find((e)=>e.email == email && e.password == password)

    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee',data:employee}))
    }

    else if(admin){
      setUser('admin')
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin',data:admin}))
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  // if(email == 'admin@example.com' && password == '123'){
  //   setUser('admin')
  //   localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))
  // }
  // else if(authData){
  //   const employee = authData.employees.find((e)=>e.email == email && e.password == password)
  //   if(employee){
  //     setUser('employee')
  //     setLoggedInUserData(employee)
  //     localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee',data:employee}))
  //   }
  // }
  // else{
  //   alert("Invalid Credentials")
  // }
 }


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : ''}
    {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : ''}
    

    </>
  )
}

export default App