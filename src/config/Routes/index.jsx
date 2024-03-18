import React from 'react'
import { BrowserRouter as Router, Routes as Routesnew, Route } from 'react-router-dom'
import { Login, MainApp, Register } from '../../pages'

const Routes = () => {
  return (
    <Router>
        <Routesnew>
            <Route path='*' element={<MainApp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routesnew>
    </Router>
  )
}

export default Routes