import { useState, useEffect } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
import HomePage from '../HomePage/HomePage'
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage'
import * as categoriesAPI from '../../utilities/categories-api'
import SendFormPage from '../SendFormPage/SendFormPage'

export default function App() {

  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryData = await categoriesAPI.getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  },[]);

  return (
    <main className="App" class="scroll-smooth">
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage categories={categories} user={user}/>} />
            <Route path="/api/users/signup" element={<AuthPage setUser={setUser}/>} />
            <Route path="/room/:videoId" element={<CategoryDetailPage categories={categories}/>} />
            <Route path="/sendForm" element={<SendFormPage user={user}/>} />
            {/* default redirect */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
    </main>
  )
}

