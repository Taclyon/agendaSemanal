import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Agenda from './pages/Agenda'

const App = () => {
  return (
    
    <BrowserRouter >
      <Routes>
        <Route  path='/' element={<Agenda />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App