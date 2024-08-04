import React from 'react'
import{Box,Typography,TextareaAutosize} from '@mui/material'
import {makeStyles} from '@mui/styles'
const textareaStyle ={
    width:'100%',
    padding:10,
    background:`url(http://i.imgur.com/2cOaJ.png)`,
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'local',
    paddingLeft:35,
    paddingTop:10,
    height:'5%',
    borderColor:'#ccc'
}  
function Response({data}) {
  let obj = data;
  let readableobj = '{\n';
  for(let key in obj){
    readableobj +='\t'
    readableobj+=(typeof obj[key]==='string')?`${key}:"${obj[key]}"`:`${key}:${obj[key]}`;
    if(Object.keys(obj).pop()!==key.toString()){
      readableobj+='\n';
    }
  }
  readableobj+='\n}'
  return (
    <Box>
    <Typography mt={2} mb={2}>Response</Typography>
    <TextareaAutosize
    minRows={3}
    maxRows={5}
    style={textareaStyle}
    disabled="disabled"
    value={readableobj}
     />
    
  
    </Box>
  )
}

export default Response
