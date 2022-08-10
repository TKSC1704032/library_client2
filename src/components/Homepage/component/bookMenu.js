import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function BookMenu() {
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Books
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{
    navigate('/books/semester/01/');
      handleClose()}} disableRipple>
          <MenuBookIcon/>
          1st Semester
        </MenuItem>
        <MenuItem onClick={()=>{navigate('/books/semester/02/')
      handleClose()}} disableRipple>
          <MenuBookIcon />
          2nd Semester

        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={()=>{navigate('/books/semester/03/');
      handleClose()}} disableRipple>
          <MenuBookIcon />
          3rd Semester
        </MenuItem>
        <MenuItem onClick={()=>{navigate('/books/semester/04/');handleClose()}} disableRipple>
          <MenuBookIcon />
          4th Semester
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={()=>{navigate('/books/semester/05/');handleClose()}} disableRipple>
          <MenuBookIcon />
          5th Semester
        </MenuItem>
        <MenuItem onClick={()=>{navigate('/books/semester/06/');handleClose()}} disableRipple>
          <MenuBookIcon />
          6th Semester
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={()=>{navigate('/books/semester/07/');handleClose()}} disableRipple>
          <MenuBookIcon />
          7th Semester
        </MenuItem>
        <MenuItem onClick={()=>{navigate('/books/semester/08/');handleClose()}}disableRipple>
          <MenuBookIcon />
          8th Semester
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
