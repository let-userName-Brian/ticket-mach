import React, { useState } from 'react'
import { Button, Box, Typography, TextField } from '@mui/material';
import uuid from 'react-uuid'
import { putNewTicket } from '../API-Calls/API';
import Swal from 'sweetalert2'

export default function Form() {

  const [registration, setRegistration] = useState({
    id: '',
    name: '',
    plate: '',
    location: '',
    number: '',
    date: new Date(),
    day: new Date().getDay(),
    vehicle: ''
  });

  const clearState = () => {
    setRegistration({
      id: '',
      name: '',
      plate: '',
      location: '',
      number: '',
      date: new Date(),
      day: new Date().getDay(),
      vehicle: ''
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(registration);
    putNewTicket({
      ...registration,
      id: uuid()
    });
    document.getElementById("ticket-form").reset();
    Swal.fire(
      'Got It!',
      'Your ticket is being printed!',
      'success'
    );
    setTimeout(() => {
      clearState();
    }, 500)
  };

  return (
    <Box sx={{ width: '60vw', display: 'flex', justifyContent: 'center', float: 'right', height: '100%', backgroundColor: 'rgb(173, 237, 206)' }}>
      <form id="ticket-form" onSubmit={(e) => onSubmit(e)} style={{ display: 'flex', flexDirection: 'column', width: '80%', marginTop: '15%', borderRadius: '10px' }}>
        <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>Please Fill Out A Ticket</Typography>
        <TextField label="Full Name" onChange={e => setRegistration({ ...registration, name: e.target.value })} sx={{ marginBottom: '1rem', marginTop: '1rem' }} />
        <TextField label="License Plate Number" onChange={e => setRegistration({ ...registration, plate: e.target.value })} sx={{ marginBottom: '1rem' }} />
        <TextField label="Vehicle Make/Model & Color" onChange={e => setRegistration({ ...registration, vehicle: e.target.value })} sx={{ marginBottom: '1rem' }} />
        <TextField label="Delivery Location (Bldg Number)" onChange={e => setRegistration({ ...registration, location: e.target.value })} sx={{ marginBottom: '1rem' }} />
        <TextField label="Phone number" onChange={e => setRegistration({ ...registration, number: e.target.value })} sx={{ marginBottom: '1rem' }} />
        <Button type='submit'>Print Ticket</Button>
      </form>
    </Box>
  )
}
