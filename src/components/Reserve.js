import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import reservepic from '../photos/reservepic.png'
import reservepic2 from '../photos/reservepic3.gif'

const Reserve = () => {
  const [value, setValue] = React.useState(new Date('2022-06-18T21:11:54'));
  const [people, setPeople] = React.useState('');
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event) => {
    setPeople(event.target.value);
  };
  
  return (
    <div style={{marginTop:-30}} id='Reserve'>
    <Box height={850} backgroundColor='#F2F3F4'>
      <body className='centered' style={{paddingTop:50}}>Reserve</body>
      <p className='reservetxt'>Book a table at 5 star Krusty Krab.<br/> Enjoy fine dining & an chamber orchestra.</p>
      <img className='reservepic2' src={reservepic2} alt='Krabby Patty'/>
      <img className='reservepic1' src={reservepic} alt='Krabby Patty'/>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack className='reserve' spacing={3}>
        <TextField  style ={{width: '50%'}} id="name" label="Full Name" variant="outlined" />
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField style ={{width: '50%'}} {...params} />}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField style ={{width: '50%'}} {...params} />}
        />
        <FormControl style ={{width: '40%'}}>
        <InputLabel id="numberofPeople"># of People</InputLabel>
        <Select
          labelId="numberofPeople"
          id="#ofPeople"
          value={people}
          label="People"
          onChange={handleChange2}
        >
          <MenuItem value={'one'}>1</MenuItem>
          <MenuItem value={'two'}>2</MenuItem>
          <MenuItem value={'three'}>3</MenuItem>
          <MenuItem value={'four'}>4</MenuItem>
          <MenuItem value={'five'}>5</MenuItem>
          <MenuItem value={'six'}>6</MenuItem>
          <MenuItem value={'seven'}>7</MenuItem>
          <MenuItem value={'eightplus'}>8+</MenuItem>
        </Select>
      </FormControl>
      </Stack>
      <Button className='reservebtn' variant="solid" href='/' style={{color:'white', backgroundColor:'black'}}>Reserve</Button>
    </LocalizationProvider>
     </Box>
    </div>
    )
}

export default Reserve