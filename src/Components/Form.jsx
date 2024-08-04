import React from 'react'
import {useContext} from 'react'
import{Box,Select,MenuItem,TextField,Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { DataContext } from '../Context/DataProvier'

const useStyles = makeStyles({
    component:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    select: {
        width: 150,
        height:40
    },
   textfield:{
  width:'100%',
  background:'#F6F6F6'
   },
   button:{
    width:110,
    height:40,
    marginLeft:[5,'!important']

   }
})
function Form({onSendClick}) {
    const classes = useStyles();
    const {formdata,setFormdata} = useContext(DataContext)
    const handleChange=(e)=>{
      setFormdata({...formdata,type:e.target.value})
    }
    const onUrlChange=(e)=>{
      setFormdata({...formdata,url:e.target.value})
      console.log(formdata);
    }
  return (

    <div className={classes.component}>

<Select value={formdata.type} 
 label="POST"
 
 onChange={(e)=>handleChange(e)}
  className={classes.select}>

    <MenuItem value={'POST'}>POST</MenuItem>
    <MenuItem value={'GET'}>GET</MenuItem>
   
  </Select>
  <TextField
  onChange={(e)=>onUrlChange(e)}
  size='small'
  className={classes.textfield}

  />
  <Button className={classes.button} variant='contained' onClick={()=>onSendClick()}>SEND
    </Button>
</div>
  )
}

export default Form
