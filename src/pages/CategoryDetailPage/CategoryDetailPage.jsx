import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CategoryDetailPage({categories}) {
    const { categoryName } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const foundCategory = await categories.find((c) => c.name === categoryName);
                setCategory(foundCategory);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [categoryName, categories]);

    // need to use these conditional checks so that before the useEffect hook kicks in, we don't want it to load the initial null
    if (!category) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          {category.name}
          {category.video}
        </div>
      );
}
