import React from 'react';
import {useSelector} from 'react-redux';
import Sidebar from '../component/sideBar';
import {CandidateState} from '../reducers/candidateSlice'


const Home: React.FC = () =>{
    const candidate = useSelector((state:CandidateState)=>state.nama)
    console.log(candidate)
    return(
        <>
            <Sidebar
            content={
                <div className='flex flex-col font-Poppins  justify-center items-center pt-12 gap-14'>
                    <span className='text-2xl font-bold '>{`"Learn as if you will live forever
live like you will die tomorrow."`}</span>
                    <span className='text-lg font-bold'>{`Mahatma Gandhi`}</span>
                </div>
            }
            />
        </>

    );
};

export default Home;