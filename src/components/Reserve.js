import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import reservepic from '../photos/reservepic.png'
import reservepic2 from '../photos/reservepic3.gif'

const Reserve = () => {
  return (
    <div style={{marginTop:-30}} id='Reserve'>
    <Box height={850} backgroundColor='#15314c'>
      <body className='centered' style={{color:'white', paddingTop:50}}>Reserve</body>
      <p className='reservetxt'style={{color:'white'}}>Book a table at 5 star Krusty Krab.<br/> Enjoy fine dining and chamber orchestra music.</p>
      <img className='reservepic2' src={reservepic2} alt='Krabby Patty'/>
      <img className='reservepic1' src={reservepic} alt='Krabby Patty'/>
      <Button className='reservebtn' variant="outlined" href='/ReservationForm' style={{color:'white', borderColor:'white'}}>Reserve</Button>
     </Box>
    </div>
    )
}

export default Reserve