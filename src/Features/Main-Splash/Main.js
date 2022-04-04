import React from 'react'
import Form from './Form'
import Welcome from './Welcome'
import Box from '@mui/material/Box';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

export default function Main() {
  return (
    <>
      <Navbar />
      <Box style={{ height: '100vh', width: '100vw' }}>
        <Welcome />
        <Form />
      </Box>
      <Footer />
    </>
  )
}
