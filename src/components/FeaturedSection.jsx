import React from 'react'
import {ArrowRight} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from './MovieCard'
import { dummyShowsData } from '../assets/assets'
const FeaturedSection = () => {
    const navigate = useNavigate()
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
        <div className='relative flex items-center justify-between pt-20 pb-10'>
            <BlurCircle top='0' right='-80px'/>
            <p className='text-gray-300 font-medium tet-lg'>Now Showing</p>
            <button onClick={ () => navigate('/movies')} className='group flex items-center gap-2 test-sm text-gray-300 cursor-pointer'>
                View All
                <ArrowRight className='group-hoer:translate-x-0.5 transition w-4.5 h-4.5'/>
            </button>

        </div>
        

        <div className='grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {dummyShowsData.slice(0,4).map((show)=>{
            return <MovieCard key={show.id} movie={show}/>
        })}

        </div>

        <div className='flex justify-center mt-20'>
             <button onClick={() =>{ navigate('/movies');scrollTo(0,0)}}
                     className=' px-10 py-3 text-sm
                     bg-primary hover:bg-primary-dull transition rounded-md
                      font-medium cursor-pointer'>
                        Show More
                    </button>

        </div>
      
    </div>
  )
}

export default FeaturedSection
