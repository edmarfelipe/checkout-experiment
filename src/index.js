import ReactDOM from 'react-dom'
import React from 'react'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Wellcome from './pages/Wellcome'
import NewUser from './pages/NewUser'
import Payment from './pages/Payment'
import Login from './pages/Login'
import Result from './pages/Result'

import './styles.css'

createStore({
  data: {}
})

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/novo-usuario" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/concluido" element={<Result />} />
        </Routes>
      </Router>
    </StateMachineProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// https://lab.hakim.se/ladda/
