import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
  },
  rating: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function RateAppointment({ open, onClose, appointment }) {
  const classes = useStyles();
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState(0);

  const handleRating = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      // Show error message to the user to select a rating
      return;
    }
    // Submit the rating and comments to the backend API
    console.log('Submitting rating:', rating, 'Comments:', comments);
    onClose(); // Close the modal
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Rate an Appointment</DialogTitle>
      <DialogContent className={classes.dialog}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="appointment-rating"
          value={rating}
          onChange={handleRating}
          className={classes.rating}
        />
        <TextField
          label="Comments"
          multiline
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          fullWidth
        />
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          className={classes.button}
        >
          Rate Appointment
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default RateAppointment;
