import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const galleryPhotos = [  {
    img: 'https://img.buzzfeed.com/store-an-image-prod-us-east-1/7574nJ-AQ.png?output-format=jpg&output-quality=auto',
    title: 'Double Krabby Patty',
  },  
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Krusty_Krab_interior_50b.png',
    title: 'A day at KK',
  },
  {
    img: 'https://www.media.hw-static.com/media/2016/05/spongebob-squarepants-nickelodeon-050516.jpg',
    title: 'Chefs Kiss',
  },
  {
    img: 'https://i.gifer.com/XbqT.gif',
    title: 'Krusty Krab At Night',
  }, 
  {
    img: 'https://i.pinimg.com/originals/8b/15/61/8b1561d2c731fec213e87a788d8bd082.jpg',
    title: 'Kelp Shake',
  }, 
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvR0fwAjXb-XL6wivYt_A-Uynky3H9Y2xpFQ&usqp=CAU',
    title: 'Perfection',
  },  
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANucM5562Sssup6ZHwWMC8zv_WcBv0kbM4w&usqp=CAU',
    title: 'Krusty Krab',
  }, 
  {
    img: 'https://i.pinimg.com/originals/f7/0b/22/f70b22db3498b20c973fc30df8677272.jpg',
    title: 'KK Drive Thru',
  },
  {
    img: 'https://www.sbmania.net/pictures/_thumb/150a/342.jpg',
    title: 'Krabby Dog',
  },
  {
    img: 'https://watchmojo.blog/wp-content/uploads/2019/03/Screen-Shot-2019-03-04-at-3.44.23-PM.png',
    title: 'Krusty Krab 2',
  },
  {
    img: 'https://i.ytimg.com/vi/m37G-06ibAU/maxresdefault.jpg',
    title: 'I Love Money',
  },
  {
    img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2021/02/Squilliam-Returns.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5',
    title: '5-star Krusty Krab',
  },
  {
    img: 'https://64.media.tumblr.com/79f92cfa86964ab9841c4693876f467c/tumblr_pjiwfocaVt1ujuaoj_400.jpg',
    title: 'Pretty Patties',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBG2s0X-QmlJApu42uczZnXB1fzcIiewsAvz4g2qvW6yDiNR_CYahQRVfPl-tBVtcjyc&usqp=CAU',
    title: 'Meal',
  },
  {
    img: 'http://media.sbmania.net/pictures/39a/154.png',
    title: 'Jelly Krabby Patty',
  },
  {
    img: 'https://i.ytimg.com/vi/ZtEz69NawT0/maxresdefault.jpg',
    title: 'Krabby Patty Supreme',
  },
];

const Gallery = () => {
  return (
    <div id='Gallery'>
    <Box
    sx={{
      height: 210,
      backgroundColor: 'White',
    }}
  />
    <div className='centered' style={{marginTop:-90}}>Gallery</div>
    <ImageList style={{marginTop:50}} sx={{ width: 1000, height: 450, marginLeft:'20%' }} cols={4} rowHeight={200}>
    {galleryPhotos.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
    </div>
  )
}

export default Gallery