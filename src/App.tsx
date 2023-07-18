import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './component/overlay'

const Login = lazy(()=>import('./page/login'));
const Home = lazy(()=>import('./page/home'));
const DataDiri = lazy(()=>import('./page/dataDiri'));
const Pendidikan = lazy(()=>import('./page/pendidikan'));
const Kerja = lazy(()=>import('./page/pengalamanKerja'));
const Result = lazy(()=>import('./page/result'));
const Edit = lazy(()=>import('./page/edit'));
const Interview = lazy(()=>import('./page/interview'));

const App:React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Overlay text="Loading..."/>}><Login/></Suspense>}/>
        <Route path='/home' element={<Suspense fallback={<Overlay text='Loading...'/>}><Home/></Suspense>}/>
        <Route path='/input/datadiri' element={<Suspense fallback={<Overlay text='Loading...'/>}><DataDiri/></Suspense>}/>
        <Route path='/input/pendidikan' element={<Suspense fallback={<Overlay text='Loading...'/>}><Pendidikan/></Suspense>}/>
        <Route path='/input/pengalaman' element={<Suspense fallback={<Overlay text='Loading...'/>}><Kerja/></Suspense>}/>
        <Route path='/result' element={<Suspense fallback={<Overlay text='Loading...'/>}><Result/></Suspense>}/>
        <Route path='/result/:where' element={<Suspense fallback={<Overlay text='Loading...'/>}><Interview/></Suspense>}/>
        <Route path='/result/:where/:id' element={<Suspense fallback={<Overlay text='Loading...'/>}><Edit/></Suspense>}/>
        {/* <Route path='/result/pystest/:id' element={<Suspense fallback={<Overlay text='Loading...'/>}><PsyEdit/></Suspense>}/> */}
      </Routes>

    </Router>
  )
}

export default App;