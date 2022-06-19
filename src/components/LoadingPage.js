import React from 'react'
import Bubbles from '../photos/loading.gif'

function LoadingPage() {
  return (
    <div style={{ backgroundImage: "url(/BackgroundLoading.jpg)"}}>
    <img src={Bubbles} width={'100%'} alt='Bubbles'/>        
    </div>
  )
}

export default LoadingPage