import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>WELCOME BACK!!</h1>
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 500,
        margin: '20px auto',
      }}
    >
       <TextField id="outlined-basic" label="EMAIL ID" variant="outlined" />
       <TextField id="outlined-basic" label="PASSWORD" variant="outlined" /> 
       <br /> 
       <Button align='centre' variant="contained">Login</Button>
       </Box>
    </div>
  )
}

export default Login