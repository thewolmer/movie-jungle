import React from 'react'
import Image from 'next/image'
async function MovieDetail({ params }) {
    console.log(params)
    const imagePath = "https://image.tmdb.org/t/p/original"
    const  movie  = params.id
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MDB_KEY}`)
        const res = await data.json()
        console.log(res);
  return (
    <>
  <h1 className='text-center font-extrabold text-4xl'> Movie Detail </h1>
  <div className='flex-col justify-center items-center'>
    <h2 className='text-3xl text-center mt-6'> {res.title} </h2>
    <h3 className='text-2xl mb-6 text-center'> {res.tagline} </h3>
    <div className='flex justify-center'>
    <Image className='w-1/2 flex' src={imagePath + res.backdrop_path} width={500} height={100} alt="big_img" /></div>
    <div className='flex items-center justify-center m-4 gap-2'>
    {res.genres.map((genres) =>(
        <div key={genres.name} className='inline-flex'>
         <div className='inline-flex px-4 py-2 rounded-lg bg-lime-500 shadow-lg flex-row'>  {genres.name} </div> 
        </div>
    ))}
    </div>
    <p className='text-center mx-20 mb-60'>
        {res.overview}
    </p>
  </div>
  </>
  )
}

export default MovieDetail