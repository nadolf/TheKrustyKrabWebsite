import React, {useState, useEffect} from 'react';
import { 
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reserve from './components/Reserve';
import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import LoadingPage from './components/LoadingPage';

export default function App() {
  const [loading, setLoading]=useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      {
        loading ?
        <LoadingPage/>
        :
      <header>
      <Navbar/>
      <Home/>
      <Menu/>
      <Reserve/>
      <Gallery/>
      <Routes>
    </Routes>
    </header>        
      }

    </div>
  );
}

