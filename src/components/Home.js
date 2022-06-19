import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import image from '../photos/flower1.png'
import image2 from '../photos/flower2.png'
import image3 from '../photos/flower3.png'
import image4 from '../photos/flower4.png'
import image5 from '../photos/KrabbyPatty.png'

const Home = () => {
  return (
  <div id=''>
    <Box
    sx={{
      height: 150,
      backgroundColor: 'White',
    }}
  />
    <body className='centered'>Welcome to The Krusty Krab </body>
    <img className='bottom-left' src={image} alt=' '/>
    <img className='top-right' src={image2} alt=' '/>
    <img className='centered'src={image3} alt=' '/>
    <img className='bottom-right' src={image4} alt=' '/>
    <p className='centered'><br/>Home of the Krabby Patty</p>
    <img className='bottom-centered' src={image5} alt=' '/>
    <Button style={{margin:300}}></Button>
    </div>
  )
}

export default Home