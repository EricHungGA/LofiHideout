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
import MyFormPage from '../MyFormPage/MyFormPage'
import { getUserData } from '../../utilities/users-api'
import MyFormEditPage from '../MyFormEditPage/MyFormEditPage'

export default function App() {

  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([]);
  const [itemWasDeleted, setItemWasDeleted] = useState(true);
  const [itemWasAdded, setItemWasAdded] = useState(true);
  const [itemWasUpdated, setItemWasUpdated] = useState(true);


  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryData = await categoriesAPI.getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    async function fetchUser() {
      const currentUser = await getUserData();
      setUser(currentUser);
    }
    setItemWasUpdated(true);
    setItemWasDeleted(true);
    setItemWasAdded(true);
    fetchUser();
    fetchCategories();
  },[itemWasDeleted, itemWasAdded, itemWasUpdated]);

  return (
    <main className="App" class="scroll-smooth">
      {user ? 
      <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage categories={categories} user={user}/>} />
            <Route path="/api/users/signup" element={<AuthPage setUser={setUser}/>} />
            <Route path="/room/:videoId" element={<CategoryDetailPage categories={categories}/>} />
            <Route path="/sendForm" element={<SendFormPage user={user} setItemWasAdded={setItemWasAdded}/>} />
            <Route path="/myforms" element={<MyFormPage user={user} itemWasDeleted={itemWasDeleted} setItemWasDeleted={setItemWasDeleted}/>} />
            <Route path="/myforms/:formId" element={<MyFormEditPage user={user} setItemWasUpdated={setItemWasUpdated}/>} />
            {/* default redirect */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          </>
          :
          <AuthPage  setUser={setUser}/>
}
    </main>
  )
}

