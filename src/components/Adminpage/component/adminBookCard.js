import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import * as React from 'react';
export default function AdminBookcard({book}) {
  return (
    <Grid item>
<Card sx={{ maxWidth: 250,boxSizing:"border-box" ,paddingTop:'5px', boxShadow:"1px 1px 10px rgba(40, 42, 43, 0.642)"}}>
      <CardMedia
        component="img"
        alt={`${book.name}`}
        image={`https://drive.google.com/uc?export=view&id=${book.cover_image_id}`} sx={{maxWidth:'200px',maxHeight:'220px',objectFit: 'contain',textAlign:'center',margin:'auto'}}
      />
      <CardContent>
        <p style={{fontSize:'14px',fontFamily:'sans-serif'}}>{book.name}</p>
        <p style={{fontSize:'12px', fontWeight:700}}> by {book.author}</p>
        <p style={{fontSize:'10px', fontWeight:500}}>{book.edition} Edition</p>
        <p style={{fontSize:'10px', fontWeight:500}}>Total num of books :{book.number_of_books} </p>
        <p style={{fontSize:'10px', fontWeight:500}}>Available Copies :{book.number_of_books_available}</p>

        {/* <Typography gutterBottom variant="overline" display='block' >
        Learning React:Functional Web Development with React and Redux
        </Typography>
        <Typography variant='caption text' className='bold' >
        by Alex Banks (Goodreads Author), Eve Porcello
        </Typography> */}
        {/* <Divider/>
        <br />
        <Typography variant='subtitle2' color="text.primary">
          Available: 32 copys
        </Typography> */}
      </CardContent>
      {/* <CardActions sx={{fontSize: 'xx-small'}}>
      
        <Button size="small" variant="contained" color='success' endIcon={<CallMadeIcon />}>Request</Button>
        <Button size="small" variant="contained" color='error' endIcon={<DownloadIcon />}>PDF</Button>
        
        <Button size="small" variant="outlined">Details</Button>
      </CardActions> */}
    </Card>
    </Grid>
  )
}
