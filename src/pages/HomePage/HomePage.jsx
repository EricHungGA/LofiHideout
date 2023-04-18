import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

export default function HomePage({categories}) {
  return (
    <>
    <h1>HomePage</h1>
    <div>
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
    </>
  )
}
