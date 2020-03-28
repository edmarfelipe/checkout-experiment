import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Wellcome() {
  let navigate = useNavigate()

  return (
    <div>
      <h1>Bem Vindo</h1>
      <div className="container">
        <button onClick={() => navigate('/novo-usuario')}>Crie usuario</button>
        <button onClick={() => navigate('/login')}>Fazer o Login</button>
      </div>
    </div>
  )
}
