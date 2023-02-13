import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Card1(props:any) {
  let id=props.data._id;
  console.log(id);
  function handleDelete(){
    var config = {
      method: 'delete',
      url: `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const navigate = useNavigate();
  const handleUpdate = (e:any) => {
    navigate(`/update/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
        <h1>hekki</h1>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.firstName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.lastName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.age}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.phoneNumber}
        </Typography>
      <CardActions>
        <Button size="small" onClick={handleDelete}>Delete</Button>
        <Button size="small" onClick={handleUpdate}>Update</Button>
      </CardActions>
    </Card>
  );
}
export default Card1;
