import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
function App() {
  

  return (
    <Router>
      <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    
      </Routes>
    </Router>
  );
}

export default App
