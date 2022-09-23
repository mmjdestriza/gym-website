import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#424242">
        <Stack gap="40px"  alignItems='center' px="50px" pt="10px">
        <Typography variant='h5' pb="40px" mt="40px">
            <h1><strong className="text-white">Developers</strong></h1>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box>
              <Typography variant='h5' pb="40px">
                <strong className="text-white-50">Dominick P. Salazar</strong>
                <br/>
                <a href='#'>dominicksalazar788@yahoo.com    </a>
              </Typography>
            </Box>
            <Box>
              <Typography variant='h5' pb="40px">
                <strong className="text-white-50">Mark Joseph N. Destriza</strong>
                <br/>
                <a href='#'>mmjdestriza@gmail.com</a>
              </Typography>
            </Box>
          </Stack>
          
        </Stack>   
    </Box>
  )
}

export default Footer