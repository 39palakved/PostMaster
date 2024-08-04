import React,{createContext, useState} from 'react'
export const DataContext = createContext(null);

function DataProvier({children}) {
  const [formdata , setFormdata]= useState({url:"", type:"POST"})
  const[paramData,setParamData]= useState([]);
  const[headerData,setHeaderData]=useState([])
  const[jsonText,setJsonText ]= useState('');
  return (
   <DataContext.Provider value={{
      formdata,
      setFormdata,
      paramData,
      setParamData,
      headerData,
      setHeaderData,
      jsonText,
      setJsonText
   }}>
     {children}
   </DataContext.Provider>
  )
}

export default DataProvier

