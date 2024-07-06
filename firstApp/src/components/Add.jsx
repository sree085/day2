import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const Add = ({person}) => {
    const [page,setPage]=useState('ADD')

    const [count,setCount]=useState(0)

    const [form,setForm]=useState({
      name:person.name,
      email:person.email,
      phone:person.phone
    })

    function valueCap(e){
      // console.log(e)
        // SPREad OPERATOR -> ...form
      setForm({...form,[e.target.name]:e.target.value})

    }

    function valueAdd(){
        // setCount(count+1)
        console.log(form)
    }

  return (
    
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* DATABINDING FOR USESTATE */}
        <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="NAME"
          name='name'
          value={form.name}
          onChange={valueCap}
          //   defaultValue="Hello World"
          />
        <TextField
          id="outlined-disabled"
          label="EMAIL ID"
          type='email'
          name='email'
          value={form.email}
          onChange={valueCap}
          //   defaultValue="Hello World"
          />
        <TextField
          id="outlined-read-only-input"
          label="PHONE"
          name='phone'
          value={form.phone}
          onChange={valueCap}
        //   defaultValue="Hello World"
        //   InputProps={{
            // readOnly: true,
        //   }}
        />
    </div>
    <div>
        {/* BUTTON EVENT    ->    onClick={valueAdd}    */}

        <Button variant='contained'onClick={valueAdd}>Register</Button>
        <br />
        {/* <small>Button is clicked {count} times</small> */}
    </div>
    </Box>
  )
}

export default Add