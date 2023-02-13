import React from 'react'
import Home from './component/Operation/Home'
import Add from './component/Operation/Add'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Update from './component/Operation/update'
const App= () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App