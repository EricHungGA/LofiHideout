import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

export default function HomePage({categories}) {
  return (
    <>
    <div class="grid grid-cols-3 grid-rows-2 mt-8 gap-y-20">
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
    </>
  )
}
