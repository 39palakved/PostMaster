import React from 'react'
import Header from './Header'
import Form from './Form'
import { useContext } from 'react'
import{Box,Select,MenuItem,TextField,Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Selecttab from './Selecttab'
import Response from './Response'
import ErrorScreen from './ErrorScreen'
import { DataContext } from '../Context/DataProvier'
import { checkParams } from '../utils/Commonutils'
import { useState } from 'react'
import SnackBar from './SnackBar'
import { getData } from '../service/Api'
const useStyles =makeStyles({
 component:{
    width:'60%',
    margin:'20px auto 0 auto'
 }
})

function Home() {
  const [errorResponse,setErrorResponse] = useState(false);
  const [apiResponse,setApiResponse] = useState({});
   const [error,setError]=useState(false);
   const [errorMsg, setErrorMsg] = useState('');
    const classes = useStyles();
    const {formdata , jsonText , paramData,headerData}= useContext(DataContext);
    const onSendClick=async()=>{
      if(!checkParams(formdata, jsonText , paramData,headerData,setErrorMsg)){
        setError(true);
        return false;
      }
    let response = await getData(formdata , jsonText , paramData,headerData);
    if(response==='error'){
       setErrorResponse(true);
       return ;
    }
    setApiResponse(response.data);
    }
  return (
    <>
    <Header/>
    <Box className={classes.component}>
    <Form onSendClick={onSendClick}/>
    <Selecttab/>
    {/* <Response/> */}
   
    {errorResponse?<ErrorScreen/>:<Response data={apiResponse}/>}
    {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg}/>}
    </Box>
   
    </>
  )
}

export default Home
