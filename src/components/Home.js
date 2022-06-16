import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image from '../photos/flower1.png'
import image2 from '../photos/flower2.png'
import image3 from '../photos/flower3.png'
import image4 from '../photos/flower4.png'
import image5 from '../photos/KrabbyPatty.png'

const images = [
  {
    url: 'https://static0.thethingsimages.com/wordpress/wp-content/uploads/2020/02/KrustyKrabMenu.png?q=50&fit=crop&w=561&dpr=1.5',
    title: 'Veiw Menu',
    width: '33%',
  },  
  {
    url: 'https://i.kym-cdn.com/photos/images/original/000/676/219/5ca.png',
    title: 'Reserve 5 Star Krusty Krab',
    width: '33%',
  },
  {
    url: 'https://www.kindpng.com/picc/m/551-5514652_spongebob-squarepants-download-png-image-spongebob-and-patrick.png',
    title: 'Join the Crew',
    width: '34%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
const Home = () => {
  return (
    <div>
    <body className='centered'>Welcome to The Krusty Krab </body>
    <img className='bottom-left' src={image} alt=' '/>
    <img className='top-right' src={image2} alt=' '/>
    <img className='centered'src={image3} alt=' '/>
    <img className='bottom-right' src={image4} alt=' '/>
    <p className='centered'><br/>Home of the Krabby Patty</p>
    <img className='bottom-centered' src={image5} alt=' '/>
    <a href='/Menu'><Button style={{margin:300 , backgroundColor:'black'}} variant="contained">Veiw Menu</Button></a>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </div>
  )
}

export default Home