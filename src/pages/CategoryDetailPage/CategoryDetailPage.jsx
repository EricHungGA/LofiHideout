import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './CategoryDetail.css'

export default function CategoryDetailPage({categories}) {
    const { videoId } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const foundCategory = await categories.find((c) => c.videoId === videoId);
                setCategory(foundCategory);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [videoId, categories]);

    // need to use these conditional checks so that before the useEffect hook kicks in, we don't want it to load the initial null
    if (!category) {
        return <div>Loading...</div>;
      }
    
      return (
        <>
        <div class="background-1"></div>
        <div class="background-2"></div>
          <div class="bg-layer-1">
          {category.ambienceType}<br></br>
          {category.name}
          <iframe class=" w-128 h-64 border-8 border-slate-500/20 border-inset opacity-80 shadow-lg shadow-green-500/50" id="ytplayer" type="text/html" width="720" height="405"
          src={`https://www.youtube.com/embed/${category.videoId}?&loop=1&controls=1`}
          frameBorder="0" allowFullScreen></iframe>

          <div id="player"></div>
        </div>
        </>
      );
}
