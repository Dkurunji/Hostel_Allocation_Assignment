import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { HostelContext } from '../App';
import {Link} from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={
            onClose}>
                  <Link to="/"><CloseIcon onClick={
                      function () {
                          
                         
                      }
                  }/></Link>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function ConfirmationModal() {
    const [open, setOpen] = React.useState(false);
    let { bookedRoom, bookStatus} = useContext(HostelContext);
   
   

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
      
  };

  return (
      <div>        
          <Button variant="outlined" color="primary" onClick={function () {
              handleClickOpen();
              bookStatus();
              console.log(bookedRoom)

            localStorage.setItem('booked', true);

      }} style={{backgroundColor:"red", color:'white',  marginTop:"15px"}}>
       Book floor
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
          Success
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Your floor has been booked successfully!!!
          </Typography>
          <Typography gutterBottom>
           Your floor details are as follows.
          </Typography>
          <Typography gutterBottom>
            Room No.{localStorage.getItem('hostel')}
          </Typography>
          <Typography gutterBottom>
            floor No. {localStorage.getItem('floor')}
          </Typography>
        </DialogContent>
    
      </Dialog>
    </div>
  );
}
