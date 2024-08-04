import React from 'react'
import{Box,Select,MenuItem,TextField,Button,Typography,Table,TableHead,TableBody,TableCell,TableRow} from '@mui/material'
import {makeStyles} from '@mui/styles'
import TabRow from './TabRow'
import { useState } from 'react'
const useStyles =makeStyles({
    tablecell:{
       border:'2px solid rgba(224,224,224,1)',
       borderCollapse:'collapse',
       padding:['7px 5px' ,'!important']
    }
})
function CreateTable({text,data,setData}) {
    const classes =useStyles();
    const [rows ,addRows] = useState([0]);
  return (
    <Box>
    <Typography mt={2} mb={2}>{text}</Typography>
    <Table sx={{ minWidth: '100%',border:'2px solid rgba(224,224,224,1)' }}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell}>KEY</TableCell>
            <TableCell className={classes.tablecell}>VALUE</TableCell>
      </TableRow>
        </TableHead>
        <TableBody>
          
         {rows.map((row,index)=>(
         <TabRow addRows={addRows}
         rowId={index}
         key={index}
         data={data}
         setData={setData}
         />
         ))
         }
         
        </TableBody>
      </Table>
    </Box>
  )
}

export default CreateTable
