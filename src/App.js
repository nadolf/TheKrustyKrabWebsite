import React, {useState, useEffect} from 'react';
import { 
  Routes,
  Route 
} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reserve from './components/Reserve';
import Home from './components/Home';
import LoadingPage from './components/LoadingPage';

export default function App() {
  const [loading, setLoading]=useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <div>
      {
        loading ?
        <LoadingPage/>
        :
      <header>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Reserve' element={<Reserve/>}/>
    </Routes>
    </header>        
      }

    </div>
  );
}

