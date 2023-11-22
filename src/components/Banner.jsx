import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';
function Banner({fetchUrl}) {
    const baseurl = "https://image.tmdb.org/t/p/original/";

    // console.log(fetchUrl);
    const [movie,setMovie]=useState()
    const fetchData=async()=>{
        const {data}=await instance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(movie);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:"600px",backgroundImage:`url(${baseurl}${movie?.backdrop_path})`,backgroundPosition:'center',backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className='bannerc'>
            <h1>{movie?.name}</h1>
            <button className='btn btn-danger'>
                Play<i class="fa-solid fa-play ms-2"></i></button>
            <button className='btn border-white ms-3 more'>More Info<i class="fa-solid fa-caret-down"></i></button>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
  )
}

export default Banner