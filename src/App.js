import React, {useState, useEffect} from 'react';
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
    </header>        
      }
    </div>
  );
}

