import { useState, useEffect } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
import HomePage from '../HomePage/HomePage'

export default function App() {

  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async() => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="App">
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/users/signup" element={<AuthPage setUser={setUser}/>} />
            {/* default redirect */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <p>{categories.map((c) => c.video)}</p>
    </main>
  )
}

