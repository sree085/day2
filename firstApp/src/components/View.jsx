import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const View = () => {
    // const rows=[{name:'maya',email:'maya@gmail.com',phone:8474287319},{name:'rayan',email:'rayan@gmail.com',phone:84784283459},{name:'jaya',email:'jaya@gmail.com',phone:8474283459}]
    const [rows,setRows]=useState([])

    //  ()=>{_____}  represents function (alternate)
    useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((res)=>{
        // console.log(res.data.users)
        setRows(res.data.users)
      })
    },[])
    // ^ [] to aviod multiple loading
  return (
    <div>
        <TableContainer style={{marginTop: '5%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View