import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const MovieList = ({title, release_date, poster_path, id, name, first_air_date }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
   <div className='m-3'>
    <div className='mb-2'>
    <h1 className='text-center font-bold p-2'>
       {title || name}
    </h1>
    <h2 className='text-center text-sm pb-2'>
    {release_date || first_air_date}
    </h2>
    </div>
    <div>
    <Link className='' href={`/${id}`}>
    <Image className='rounded-b-lg w-full shadow-2xl rounded-xl' src={imagePath + poster_path} width={300} height={500} alt='brah'/>
    </Link>
    </div>
   </div>
  )
}

export default MovieList