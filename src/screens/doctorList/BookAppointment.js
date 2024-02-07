import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialog: {
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function BookAppointment({ doctor, open, onClose }) {
  const classes = useStyles();

  // State for form fields
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [symptoms, setSymptoms] = useState('');

  // Dummy time slots
  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00'];

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleTimeSlotChange = (event) => {
    setTimeSlot(event.target.value);
  };

  
  const handleBooking = () => {
    // Validate fields, make API call, etc.
    console.log('Booking appointment for:', doctor.name, appointmentDate, timeSlot, medicalHistory, symptoms);
    onClose(); // Close modal after booking
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Book an Appointment</DialogTitle>
      <DialogContent className={classes.dialog}>
        <TextField
          margin="dense"
          label="Doctor's Name"
          type="text"
          fullWidth
          value={doctor.name}
          InputProps={{
            readOnly: true,
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="appointment-date"
            label="Appointment Date"
            format="MM/dd/yyyy"
            value={appointmentDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="time-slot-label">Time Slot</InputLabel>
          <Select
            labelId="time-slot-label"
            id="time-slot"
            value={timeSlot}
            onChange={handleTimeSlotChange}
          >
            {timeSlots.map((slot, index) => (
              <MenuItem key={index} value={slot}>{slot}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Medical History"
          type="text"
          fullWidth
          multiline
          rows={2}
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Symptoms"
          type="text"
          fullWidth
          multiline
          rows={2}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <Button onClick={handleBooking} color="primary" variant="contained" className={classes.button}>
          Book Appointment
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
