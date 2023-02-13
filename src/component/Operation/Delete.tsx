import React from 'react'
import { useLocation } from 'react-router-dom';
const Delete = () => {
  const Location=useLocation();
  console.log(Location);
  return (
    <div>Delete</div>
  )
}

export default Delete