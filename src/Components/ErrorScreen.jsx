import React from 'react'
import{Box,Typography,TextareaAutosize} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { ClassNames } from '@emotion/react';
const useStyle = makeStyles({
    error:{
   width:'60%',
   
   height:'auto',
   objectPosition:'center 0%'
  

    }
})
function ErrorScreen() {
    const classes = useStyle();
    const error = 'https://global.discourse-cdn.com/getpostman/original/3X/a/4/a4f81d30d6fa8b6b7a0c127b285476bb7fbf2e66.png';
   
  return (
    <Box>
    <Typography mt={2} mb={2}>Response</Typography>
    <Box  style={{display:'flex' , justifyContent:'center' }}>
        <img src ={error} alt="error"
       
        className={classes.error}
        />
    </Box>
    
  
    </Box>
  )
}

export default ErrorScreen
