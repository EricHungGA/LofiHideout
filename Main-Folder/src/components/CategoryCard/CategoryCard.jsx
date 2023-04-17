import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom'


export default function CategoryCard({category}) {

  return (
    <Link to={`/room/${category.name}`}>
    <div className="card">
        {category.name}
    </div>
    </Link>
  )
}
