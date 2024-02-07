import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Appointment({ isLoggedIn, appointments, onRate, isLoading }) {
  const classes = useStyles();

  if (!isLoggedIn) {
    return <Typography variant="h6">Login to see appointments</Typography>;
  }
  if (isLoading) {
    return <Typography variant="h6">Loading appointments...</Typography>;
  }

  if (appointments.length === 0) {
    return <Typography variant="h6">No appointments found.</Typography>;
  }

  return (
    <div>
      {appointments.map((appointment, index) => (
        <Paper key={index} className={classes.paper}>
          <Typography variant="h6">{appointment.doctorName}</Typography>
          <Typography>Date: {appointment.date}</Typography>
          <Typography>Symptoms: {appointment.symptoms}</Typography>
          <Typography>Medical History: {appointment.medicalHistory}</Typography>
          <Button variant="outlined" color="primary" onClick={() => onRate(appointment)} className={classes.button}>
            RATE APPOINTMENT
          </Button>
        </Paper>
      ))}
    </div>
  );
}

// Replace this export with your actual Redux-connected component
export default Appointment;
