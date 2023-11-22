import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Row({title,fetchUrl,isposter}) {
  const baseurl = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchUrl);
const [allMovie,setAllMovies]=useState()
 const fetchData=async()=>{
  const {data}=await instance.get(fetchUrl)
  setAllMovies(data.results);
 }
//  console.log(allMovie);
 useEffect(()=>{
fetchData()
 },[])
    return (
    <div><h1 style={{color:"white"}}>{title}</h1>
    <div className='movie-row'>
      {
        allMovie?.map(item=>(
          <img className={`movie ${isposter && 'movie_poster'}`} src={`${baseurl}${isposter?item.poster_path:item.backdrop_path}`} alt="error" />
        ))
      }
    </div>
    </div>
  )
}

export default Row