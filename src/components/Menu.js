import { Grid } from '@mui/material'
import MenuPic1 from '../photos/Krabby-Patty-PNG-Image.png';
import Box from '@mui/material/Box';
import React from 'react'

const Menu = () => {
  return (
    <div id='Menu'>
    <Box
    sx={{
      height: 90,
      backgroundColor:'#FEF9E7',
    }}
  />
    <Box  backgroundColor='#FEF9E7' >
      <body  className='centered' style={{color:'#6F201A'}}>GALLEY GRUB</body> 
          <Grid container>
          <Grid marginLeft={'33%'} marginTop={'7%'} xs={12} sm={3}>        
          <p>KRABBY PATTY..... 1.25</p>
          <p>DOUBLE KRABBY PATTY..... 2.00</p>
          <p>TRIPLE KRABBY PATTY..... 3.00</p>
          <p>&nbsp;-w/ Sea Cheese..... +0.25</p>          
          <p>CORAL BITS</p>
          <p>&nbsp;-Small..... 1.00</p>
          <p>&nbsp;-Medium..... 1.25</p>
          <p>&nbsp;-Large..... 1.50</p>
          <p>KELP RINGS..... 1.50</p>
          <p>&nbsp;-Salty Sauce..... 0.25</p>
          </Grid>
          <Grid marginTop={'7%'} xs={12} sm={3}>
          <p>KRABBY MEAL..... 3.50</p>
          <p>DOUBLE KRABBY MEAL..... 3.75</p>
          <p>TRIPLE KRABBY MEAL..... 4.00</p>
          <p>SALTY SEA DOG..... 1.25</p>
          <p>SAILORS SURPRISE..... 3.00</p>
          <p>KELP SHAKE..... 2.00</p>
          <p>SEAFOAM SODA</p>
          <p>&nbsp;-Small..... 1.00</p>
          <p>&nbsp;-Medium..... 1.25</p>
          <p>&nbsp;-Large..... 1.50</p>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          </Grid>
        </Grid>    
          <img className='menu-img' src={MenuPic1} alt='Krabby Patty'/>
         </Box>     
    </div>
  )
}

export default Menu