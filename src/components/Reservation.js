import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import reservepic from '../photos/reservepic.png'
import reservepic2 from '../photos/reservepic3.gif'
import ReservationForm from './ReservationForm';

const Reserve = () => {
  return (
    <div style={{marginTop:-30}} id='Reserve'>
    <Box height={750} backgroundColor='#F2F3F4'>
      <body className='centered' style={{paddingTop:50}}>Reserve</body>
      <p className='reservetxt'>Book a table at 5-star Krusty Krab.<br/> Enjoy fine dining & a chamber orchestra.</p>
      <img className='reservepic2' src={reservepic2} alt='Fine Dinning'/>
      <img className='reservepic1' src={reservepic} alt='Chamber Orchestra'/>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack className='reserve' spacing={3}>
      <ReservationForm/>    
      </Stack>
    </LocalizationProvider>
     </Box>
    </div>
    )
}

export default Reserve