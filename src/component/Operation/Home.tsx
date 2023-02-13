import React ,{useEffect,useState} from 'react';
import Navbar from '../Navabar/Navbar'
import Footer from '../Footer/Footer'
import { Button } from '@mui/material';
import axios from 'axios'
import Card1 from '../Card/Card'
import { Link } from 'react-router-dom';


function Home() {
 
  const [list, setlist] = useState([]);
 
  async function fetch(){
    var config = {
        method: 'get',
        url: 'https://blue-journalist-bbrpv.ineuron.app:4000/users',
        headers: { }
      };
      try {
        const response = await axios(config);
        const value=response.data.data;
        setlist(value);
        console.log(list);
      } catch (error) {
        console.log(error);
      }
  }


  useEffect(()=>{
    fetch();
},[]);


  return (
    <div>
      <Navbar/>
    <div style={{height:"80vh"}}>
    <div className="text-3xl font-bold border-r-2 shadow-2xl h-40 m-20 p-10 bg-slate-200">
        <h1 className="txt-3xl to-blue-600">Do You Want to add More User?</h1>
       <Link to='/add'><Button variant="contained">Add User</Button></Link>
    </div>
    <div className="h-100 w-auto shadow-lg m-10 flex-auto	flex flex-column">
   
    </div>
    </div>
    {
        list.map((item,i)=>(<p key={i}>
           <Card1 data={item}/>
        </p>
      ))
    }
  
    <Footer/>
    </div>
  );
}

export default Home;
