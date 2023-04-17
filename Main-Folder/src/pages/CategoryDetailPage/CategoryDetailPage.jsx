import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetailPage({categories}) {
    const { categoryName } = useParams();
    const category = categories.find((c) => c.name === categoryName);

  return (
    <div>
        {category.name}
        {category.video}
    </div>
  )
}
