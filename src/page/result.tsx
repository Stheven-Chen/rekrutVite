import React from 'react'
import Sidebar from '../component/sideBar'
import {useNavigate} from 'react-router-dom'

const Result : React.FC = () =>{
  const NavClass = 'bg-white rounded-lg shadow-lg p-5 w-1/4 text-center hover:scale-110 cursor-pointer transform-gpu transition-transform duration-300 active:scale-90'
  const navigate = useNavigate()
  return(
    <Sidebar
      content={
        <>
          <div className='flex flex-col justify-center items-center gap-5 font-Poppins text-lg font-semibold'>
            <div className={NavClass} onClick={() =>navigate('/result/interview')}>
            Interview HC
            </div>
            <div className={NavClass} onClick={() =>navigate('pystest')}>
              Psychological Test
            </div>
            <div className={NavClass} onClick={() =>navigate('interviewuser')}>Interview User</div>
            <div className={NavClass} onClick={() =>navigate('offering')}>Offering</div>
            <div className={NavClass} onClick={() =>navigate('mcu')}>Medical Check Up</div>
          </div>
        </>
      }
    />
  )
}

export default Result;