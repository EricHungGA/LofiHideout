import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

export default function HomePage({categories}) {
  return (
    <>
    <div class="grid grid-cols-3 mt-8">
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
    </>
  )
}
