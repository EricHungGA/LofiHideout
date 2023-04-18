import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

export default function HomePage({categories}) {
  return (
    <>
    <div>
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
<div class="h-screen">
<a href="#" class="group relative block bg-black rounded-2xl h-1/2 w-72 border border-slate-400">
<div class="p-8">
  <img
    alt="Developer"
    src="https://news.harvard.edu/wp-content/uploads/2022/11/081022_Harvard_Forest_54-1200x800.jpg"
    class="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8 ">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Rain
    </p>
    <p class="text-xl font-bold text-white/70 sm:text-2xl">Lofi Hip-Hop</p>
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
</a>
</div>


    </>
  )
}
