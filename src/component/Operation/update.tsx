import React,{useState,useEffect}from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navabar from '../Navabar/Navbar';
import Footer from '../Footer/Footer';


const Update = () => {
  const [lname,setlname]=useState('');
  const [fname,setfname]=useState('');
  const [pnumber,setpnumber]=useState('');
  const [age,setage]=useState('');
  const { id } = useParams();

  const handleSubmit=async()=>{
    // const data={firstName:fname,lastName:lname,phoneNumber:pnumber,age:age};
    var data = JSON.stringify({
        "firstName": "Guddu",
        "lastName": "Navgire",
        "phoneNumber": "2221212221",
        "age": 22
      });
      
      var config = {
        method: 'patch',
        url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
        headers: { 
          'id': id, 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  function fetch(){
    var config = {
        method: 'get',
        url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        const value=response.data;
        const name=JSON.stringify(value.data.firstName);
        const last=JSON.stringify(value.data.lastName);
        const age=JSON.stringify(value.data.age);
        const phone=JSON.stringify(value.data.phoneNumber);
        setfname(name);
        setlname(last);
        setage(age);
        setpnumber(phone);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(()=>{
    fetch();
  },[])

  console.log(id);
  return (
   
     <>
    <Navabar/>
    <div className="h-20 shadow-lg m-20 p-20 justify-center items-center" style={{height:"60vh"}}>
      <h1 className="text-blue-700">Update it</h1>
      <TextField id="outlined-basic" label="First_Name" value={fname} onChange={(e)=>setfname(e.target.value)} variant="outlined" className="m-5"/>
      <TextField id="outlined-basic" label="Last_Name" value={lname} onChange={(e)=>setlname(e.target.value)} variant="outlined" className="m-5"/>
      <TextField id="outlined-basic" label="Phone_Number" value={pnumber} onChange={(e)=>setpnumber(e.target.value)} variant="outlined" className="m-5"/>
      <TextField id="outlined-basic" label="Age" value={age} onChange={(e)=>setage(e.target.value)} variant="outlined" className="m-5"/>
      <Button onClick={handleSubmit} variant="outlined" className="m-10">Submit</Button>
    </div>
    <Footer/>
    </>
  )
}

export default Update