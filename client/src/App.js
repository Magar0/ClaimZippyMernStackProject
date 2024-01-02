import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import TaskQueue from './pages/TaskQueue/TaskQueue'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<TaskQueue />} />
        <Route path='/task' element={<TaskQueue />} />
        <Route path='/network' element={<TaskQueue />} />
        <Route path='/non-network' element={<TaskQueue />} />
        <Route path='/document' element={<TaskQueue />} />
        <Route path='/profile' element={<TaskQueue />} />
        <Route path='/audittrail' element={<TaskQueue />} />
        <Route path='/support' element={<TaskQueue />} />
        <Route path='/search' element={<TaskQueue />} />
      </Route>
    </Routes>
  )
}

export default App