import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


function Titlecard({title,category}) {
  const cardsRef=useRef();
  const [apiData,setApiData]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTAyZjMwYmZiMmI5NzdhY2UyYWQ1OTY5YTgzNDEzMSIsIm5iZiI6MTcxNTU2Mzk1Mi4xNzUsInN1YiI6IjY2NDE2ZGFmYTYwNDJjMWIxNWZmOGYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ekVUaDUTPrVnrFwa3o8j3wESaeQsqfh7FROkCn1-hk'
    }
  };
  


const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel);
  fetch(`https://api.themoviedb.org/3/movie/${category || 'New Released'}?language=en-US&page=1`, options)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
},[category, title])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
   
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index)=>{
            return(
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w154/${card.poster_path}`} alt="" />
                <p>{card.original_title}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Titlecard
