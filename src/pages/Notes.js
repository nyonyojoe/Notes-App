import React, {useState, useEffect} from 'react'
import { Container, Grid, Paper} from '@mui/material';

export default function Create() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])
  
 
  return (
    <Container>
    <Grid container>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} sm={6} lg={4}>
          <Paper>{note.title}</Paper>
        </Grid>
      ))}
    </Grid>
    </Container>
  )
}
 