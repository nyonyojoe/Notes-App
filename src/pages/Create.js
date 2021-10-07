import { Button, Container} from '@mui/material'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});


export default function Notes() {
  const classes = useStyles('');

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos');




  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title === ''){
      setTitleError(true)
    }
    if(details === ''){
      setDetailsError(true)
    }

    if(title && details){
      console.log(title,details,category)
    }
  }

  return (
    <Container>
     <Typography
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom
      className={classes.btn}
     >
       Create a new Note 
     </Typography>

     <form 
     autoComplete="off" 
     noValidate
     onSubmit={handleSubmit}

     >
        <TextField
        onChange={((e)=> setTitle(e.target.value))}
        className={classes.field}
         label="Title"
         color="secondary"
         fullWidth 
         variant="outlined"
         required
         error={titleError}
         />

         <TextField
         onChange={(e)=> setDetails(e.target.value)}
         className={classes.field}
         label="Details"
         multiline
         rows={4}
         color="secondary"
         fullWidth 
         variant="outlined"
         required
         error={detailsError}
         />

        <FormControl className={classes.field}>
        <FormLabel component="legend">Notes Categories</FormLabel>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio />} label="Money" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
       </RadioGroup>
       </FormControl>
         
      <Button
        type="submit"

        variant="contained"
        endIcon={<SendIcon/>}
      >
        Submit
      </Button>

     </form>


    </Container>
  )
}
