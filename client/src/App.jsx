import React from 'react'
import { Login,Register } from './components'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'



const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App