import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
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
      };

      fetchData();
    }, [videoId, categories]);

    // need to use these conditional checks so that before the useEffect hook kicks in, we don't want it to load the initial null
    if (!category) {
        return <div>Loading...</div>;
      }

      return (
        <>
  <div
    style={{ backgroundImage: `url('${category.bImage}')` }}
    className={`background-image`}
  ></div>

  <div
    style={{ backgroundImage: `url('${category.bAmbience}')` }}
    className={`background-ambience`}
  ></div>

  <div>
    <p class="text-sm font-medium uppercase tracking-widest text-indigo-400">
      {category.ambienceType}
    </p>
    <p class="text-xl font-bold text-white/60 sm:text-2xl tracking-wider">{category.name}</p>
    <div class="flex justify-center">
      <iframe
        allow="autoplay"
        class={`w-3/5 h-96 border-8 border-slate-500/20 border-inset opacity-80 shadow-lg shadow-${category.shadow}-400/50 mt-4`}
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${category.videoId}?&loop=1&autoplay=1&controls=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div id="player"></div>
    </div>
  </div>

</>

);
}
