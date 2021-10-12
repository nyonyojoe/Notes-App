import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';


export default function NoteCard({note,handleDelete}){

    return(
      <Card elevation={10
      }>
          <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlinedIcon />
          </IconButton>
          }
          title={note.title}
          subheader={note.category}
          />
          <CardContent>
              <Typography variant="body2" color="textSecondary">
                  {note.details}
              </Typography>
          </CardContent>
      </Card>
    )
}