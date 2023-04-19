import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom'


export default function CategoryCard({category}) {

  return (
<>
    <div class="flex justify-center">
    <div class="group relative block bg-black rounded-2xl h-128 w-72 border border-slate-400 transition overflow-hidden">
    <div class="p-8">
    <Link to={`/room/${category.name}`}>
      <div class="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-0">
      <img
        alt="Developer"
        src={category.cardImage}
        class="rounded-2xl absolute inset-0 object-cover h-full w-full transition-opacity"
      />
      </div>
      <div class="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-100">
      <img
        alt="Developer"
        src={category.hiddenCardImage}
        class="rounded-2xl absolute inset-0 object-cover h-full w-full"
      />
      </div>
      </Link>
      <div class="relative p-4 sm:p-6 lg:p-8 ">
        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
          {category.ambienceType}
        </p>
        <p class="text-xl font-bold text-white/70 sm:text-2xl">{category.name}</p>
        <div class="mt-4 sm:mt-4 lg:mt-4">
        <div
          class="translate-y-8 transform opacity-0 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
          <p class="text-sm text-white">
            Enter Room
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>
  )
}
