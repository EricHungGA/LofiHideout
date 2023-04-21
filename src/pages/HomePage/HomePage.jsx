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
    <div class="mt-24">
    <h1 class="text-amber-500/50 mb-2">Want to see a new room?</h1>
    <button onClick={handleFormClick} class="rounded-2xl border border-amber-500/80 text-amber-500/80 w-48 h-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500/40 duration-300">Send A Request</button>
    </div>
    {user ? 
    <button onClick={() => navigate('/myforms')} class="rounded-2xl border border-indigo-500/80 text-indigo-500/80 w-48 h-16 mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500/40 duration-300">View My Requests</button>
    :
    <div></div>
  }
    </>
  )
}
