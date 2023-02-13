import React,{useState}from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const Add = () => {
  const [lname,setlname]=useState('');
  const [fname,setfname]=useState('');
  const [pnumber,setpnumber]=useState('');
  const [age,setage]=useState('');

  const handleSubmit=async()=>{
    const data={firstName:fname,lastName:lname,phoneNumber:pnumber,age:age};
    // var data = JSON.stringify({
    //   "firstName": "Guddu",
    //   "lastName": "Navgire",
    //   "phoneNumber": "2221212221",
    //   "age": 22
    // });
    const value=JSON.stringify(data);
    var config = {
      method: 'post',
      url: 'https://blue-journalist-bbrpv.ineuron.app:4000/user/create',
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      data : value
    };
    try {
      const response=await axios(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log("error"+ error);
    }
  }

  return (
    <div className="h-20 shadow-lg m-50 bg-slate-800">
      <TextField id="outlined-basic" label="First_Name" value={fname} onChange={(e)=>setfname(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Last_Name" value={lname} onChange={(e)=>setlname(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Phone_Number" value={pnumber} onChange={(e)=>setpnumber(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Age" value={age} onChange={(e)=>setage(e.target.value)} variant="outlined" />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Add