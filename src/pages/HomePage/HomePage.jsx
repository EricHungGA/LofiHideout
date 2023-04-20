import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import './HomePage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function HomePage({categories, user}) {
  const navigate = useNavigate();

  function handleFormClick() {
    {user ?
    navigate('/sendForm')
    :
    navigate('/api/users/signup')
    }
  }

  return (
    <>
    <style>{`body { background-image: url('https://res.cloudinary.com/di8ugfihk/image/upload/v1681921382/ezgif.com-crop_ocvy7g.gif'); }`}</style>
    <div class="grid grid-cols-3 grid-rows-2 mt-12 gap-y-20">
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>

    <button onClick={handleFormClick} class="border border-pink-500 text-pink-500">REQUEST FORM</button>
    </>
  )
}
