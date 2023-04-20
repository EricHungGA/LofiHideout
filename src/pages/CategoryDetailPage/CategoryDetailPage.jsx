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
        <div class="background-image"></div>
        <div class="background-ambience"></div>
          <p class="text-sm font-medium uppercase tracking-widest text-indigo-400">
          {category.ambienceType}
          </p>          
          <p class="text-xl font-bold text-white/60 sm:text-2xl tracking-wider">{category.name}</p>
          <div class="flex justify-center">
          <iframe class=" w-128 h-96 border-8 border-slate-500/20 border-inset opacity-80 shadow-lg shadow-amber-400/50 mt-4" id="ytplayer" type="text/html" width="720" height="405"
          src={`https://www.youtube.com/embed/${category.videoId}?&loop=1&controls=1`}
          frameBorder="0" allowFullScreen></iframe>

          <div id="player"></div>
          </div>
        </>
      );
}
