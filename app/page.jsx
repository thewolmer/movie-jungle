import MovieList from './MovieList';
export default async function Home() {
  const data = await fetch( `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.MDB_KEY}`
  )
  const res = await data.json()
  console.log(res);
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <h1 className='text-4xl text-center font-extrabold'>
        The Movie Jungle
      </h1>
      <div className='md:grid-cols-4 inline-grid grid-cols-2 gap-y-20'>
      {res.results.map((movie) => (
      <MovieList  key={movie.key} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} name={movie.name} first_air_date={movie.first_air_date} />
      ))}
      </div>
    </main>
  )
}
