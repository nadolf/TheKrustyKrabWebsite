import React from 'react'
import Loader from '../photos/loading.gif'

function LoadingPage() {
  return (
    <div style={{ backgroundImage: "url(/BackgroundLoading.jpg)"}}>
    <img src={Loader} width={'100%'} alt='Krabby Patty'/>        
    </div>
  )
}

export default LoadingPage