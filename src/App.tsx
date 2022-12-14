import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './components/Project'
import Login from './pages/Login'
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/dashboard" element={<Landing />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
