import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favorite = () => {
  console.log(dummyShowsData)
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <h1 className='text-lg font-medium my-4'>Your Favorites Movies</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
         <BlurCircle top='150px' left='0px'/>
          <BlurCircle bottom='50px' right='50px'/>
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
      
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>Add Favorite Movies</h1>
      
    </div>
  )
}

export default Favorite
