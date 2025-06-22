/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyShowsData, dummyDateTimeData, assets } from '../assets/assets'
import Loading from '../components/Loading';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import isoTimeFormat  from '../lib/isoTimeFormat';
import BlurCircle from '../components/BlurCircle';
import toast from 'react-hot-toast';

const SeatLayout = () => {
  const groupRow =[["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]]
  const {id,date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData, // ✅ renamed correctly
      });
    }
  };

const handleSeatClick = (seatId) => {
  if(!selectedTime) return toast("Please select a time")
 const isSelected = selectedSeats.includes(seatId);

  // Only block if selecting a new one and limit exceeded
  if (!isSelected && selectedSeats.length >= 5) {
    return toast("You can only select up to 5 seats");
  }
  // Toggle seat
  setSelectedSeats(prev =>
    isSelected ? prev.filter(seat => seat !== seatId) : [...prev, seatId]
  );
}
const renderSeats = (row,count=9) => (
  <div key={row} className='flex gap-2 mt-2'>
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {Array.from({length:count},(_,i)=>{
        const seatId= `${row}${i+1}`;
        return (
          <button key={seatId} onClick={()=>handleSeatClick(seatId)} 
          className={`h-8 w-8 rounded border border-primary/60  cursor-pointer transition ${selectedSeats.includes(seatId) ? "bg-primary text-white" : "hover:bg-primary/10"}`}>
            {seatId}
          </button>
        )
      })}

    </div>

  </div>
)

  useEffect(() => {
    getShow();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/* Availabel timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='tet-lg font-semibold px-6'>Availabe Timings</p>
        <div className='mt-5 space-y-2'>
          {   show.dateTime[date].map((item)=>(
            <div key={item.time} onClick={()=>setSelectedTime(item)} className={`flex items-center gap-2 px-6 py-2 
                             w-mqx rounded-r-md 
                             cursor-pointer transition ${selectedTime ?.time=== item.time ? "bg-primary text-white" : "hover:bg-primary/10"}`}>
              <ClockIcon className='2-4 h-4'/>
              <p className='text-sm'>{isoTimeFormat(item.time)}</p>

            </div>
          )) }


        </div>
        
      </div>

      {/* Seat layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle botton='0px' right='0px'/>
        <h1 className='text-2xl font-semibold mb-4'>Select your seat</h1>
        <img src={assets.screenImage} alt='screen' className='max-w-2xl'/>
        <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>


        <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRow[0].map(row=>renderSeats(row))}
          </div>
                    <div className='grid grid-cols-2 gap-11'>
          
            {groupRow.slice(1).map((group,idx)=>(
              <div key={idx}>
                 {group.map(row=>renderSeats(row))}

                </div>
            ))}
          

        </div>

        </div>

            <button onClick={() => navigate("/my-bookings")} className='flex items-center gap-2 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium
            cursor-pointer active:scale-95'>Proceed to checkout
              <ArrowRightIcon strokeWidth={2} className='w-4 h-4'/>

            </button>





      </div>



    </div>
  ) : (
    <Loading/>
  )
}

export default SeatLayout
