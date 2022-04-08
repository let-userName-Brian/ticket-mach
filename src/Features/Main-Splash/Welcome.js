import React from 'react'
import { Box, Typography } from '@mui/material'
import SLDLOGO from '../Assets/SLD45.png'

/**
 * simply renders the welcome message and the logo
 */
export default function Welcome() {
  return (
    <Box style={{ float: 'left', height: '100%', backgroundColor: 'rgb(173, 237, 206)', width: '40vw' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginTop: '25%' }}>
        <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>Gateway to Space</Typography>
        <img src={SLDLOGO} alt="SLD Logo" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', height: '75%', width: '70%' }} />
      </Box>
    </Box>
  )
}
