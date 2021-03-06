import React from 'react'
import * as Yup from 'yup'
import { Grid, TextField, Button, Box, Typography, Modal} from '@mui/material'
import { Formik,Field,Form} from 'formik';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const ReservationForm = () => {
    const initialValues={
        fullName:'',
    }
    const validationSchema = Yup.object().shape({
        fullName: Yup.string(),
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    const [value, setValue] = React.useState(new Date('2022-12-18T12:00:00'));
    const [people, setPeople] = React.useState('');
    const handleChange = (newValue) => {
        setValue(newValue);
      };
    const handleChange2 = (event) => {
        setPeople(event.target.value);
      };
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        boxShadow: 10,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

  return (
    <Grid container>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Stack spacing={2}>
                                <Field as={TextField} style={{width:'70%'}} variant='outlined' name="fullName" label='Full Name'
                                    placeholder="Full Name" required/>
                                    <DesktopDatePicker
                                    label="Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}
                                    />
                                    <TimePicker
                                    label="Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}
                                    />
                                    <FormControl style={{width:'70%'}}>
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
                                    <Button type='submit' variant='contained' disabled={props.isSubmitting} style={{color:'white', backgroundColor:'black',width:'70%'}} onClick={handleOpen}>{props.isSubmitting ? "Loading" : "Reserve"}</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-title"
                                        aria-describedby="modal-text"
                                    >
                                        <Box sx={style}>
                                        <Typography id="modal-title" align='center' variant="header" component="h5">
                                            Thank You!
                                        </Typography>
                                        <Typography id="modal-text" align='center' sx={{ mt: 2 }}>
                                            You have reserved a table at the 5-star Krusty Krab.<br/> See you soon :)
                                        </Typography>
                                        </Box>
                                    </Modal>
                            </Stack>
                        </Form>
                    )}
         </Formik>                     
</Grid>
  )
}

export default ReservationForm