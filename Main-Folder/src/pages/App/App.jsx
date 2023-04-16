import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
import HomePage from '../HomePage/HomePage'

export default function App() {

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/users/signup" element={<AuthPage setUser={setUser}/>} />
            {/* default redirect */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
    </main>
  )
}

