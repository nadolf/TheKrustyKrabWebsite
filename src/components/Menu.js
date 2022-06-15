import { Grid } from '@mui/material'
import MenuPic1 from '../photos/Krabby-Patty-PNG-Image.png';
import React from 'react'

const Menu = () => {
  return (
    <>
    <>
      <body  className='centered' style={{color:'#6F201A'}}>GALLEY GRUB</body>
      <img className='bottom-right' src={MenuPic1} alt='Krabby Patty'/>
    </>
    <div>
          <Grid container marginTop={7} >
          <Grid marginLeft={'33%'} xs={12} sm={3}>        
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
          <Grid xs={12} sm={3}>
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
          </Grid>
        </Grid>      
    </div>
    </>
  )
}

export default Menu