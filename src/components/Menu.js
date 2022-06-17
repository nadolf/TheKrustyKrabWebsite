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
      backgroundColor: '#FEF9E7',
    }}
  />
    <Box  backgroundColor='#FEF9E7' >
      <body  className='centered' style={{color:'#6F201A'}}>GALLEY GRUB</body> 
          <Grid container>
          <Grid marginLeft={'33%'} marginTop={'7%'} xs={12} sm={3}>        
          <p>KRABBY PATTY</p>
          <p>&nbsp;-w/ Sea Cheese</p>
          <p>DOUBLE KRABBY PATTY</p>
          <p>TRIPLE KRABBY PATTY</p>
          <p>CORAL BITS</p>
          <p>&nbsp;-Small</p>
          <p>&nbsp;-Medium</p>
          <p>&nbsp;-Large</p>
          <p>KELP RINGS</p>
          <p>&nbsp;-Salty Sauce</p>
          </Grid>
          <Grid marginTop={'7%'} xs={12} sm={3}>
          <p>KRABBY MEAL</p>
          <p>DOUBLE KRABBY MEAL</p>
          <p>TRIPLE KRABBY MEAL</p>
          <p>SALTY SEA DOG</p>
          <p>SAILORS SURPRISE</p>
          <p>KELP SHAKE</p>
          <p>SEAFOAM SODA</p>
          <p>&nbsp;-Small</p>
          <p>&nbsp;-Medium</p>
          <p>&nbsp;-Large</p>
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