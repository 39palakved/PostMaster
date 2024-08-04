import React from 'react'
import{Typography,TextareaAutosize} from '@mui/material'
import { useContext } from 'react'
import {makeStyles} from '@mui/styles'
import { DataContext } from '../Context/DataProvier'
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
function CreateJsonText() {
  const onValueChange=(e)=>{
     setJsonText(e.target.value);
  }
  const {setJsonText}= useContext(DataContext);
  return (
    <>
    <Typography mt={2} mb={2}>JSON</Typography>
    <TextareaAutosize
    minRows={3}
    maxRows={5}
    style={textareaStyle}
    onChange={(e)=>onValueChange(e)}
     />
    
  
    </>
  )
}

export default CreateJsonText
