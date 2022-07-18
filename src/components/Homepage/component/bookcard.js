import CallMadeIcon from '@mui/icons-material/CallMade';
import DownloadIcon from '@mui/icons-material/Download';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
export default function Bookcard() {
  return (
    <Grid item>
<Card sx={{ maxWidth: 300,boxSizing:"border-box", boxShadow:"1px 1px 10px rgba(40, 42, 43, 0.642)" }}>
      <CardMedia
        component="img"
        alt="Learning React"
        height="250px"
        image={process.env.PUBLIC_URL + '/Image/book1.jpg'} sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="overline" display='block'>
        Learning React: Functional Web Development with React and Redux
        </Typography>
        <Typography variant='caption text' className='bold' >
        by Alex Banks (Goodreads Author), Eve Porcello
        </Typography>
        <Divider/>
        <br />
        <Typography variant='subtitle2' color="text.primary">
          Available: 32 copys
        </Typography>
      </CardContent>
      <CardActions sx={{fontSize: 'xx-small'}}>
      
        <Button size="small" variant="contained" color='success' endIcon={<CallMadeIcon />}>Request</Button>
        <Button size="small" variant="contained" color='error' endIcon={<DownloadIcon />}>PDF</Button>
        
        <Button size="small" variant="outlined">Details</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}
