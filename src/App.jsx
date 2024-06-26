import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert } from './components'

function App() {

  const alertMessage = useSelector((state) => state.alertMessage)

  return (
    <>
    {
        alertMessage?.message &&
        <Alert message={alertMessage.message} type={alertMessage.type} />
      }
      <Outlet />
    </>
  )
}

export default App
