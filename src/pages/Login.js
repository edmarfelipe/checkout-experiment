import React from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { useNavigate } from 'react-router-dom'
import updateAction from './updateAction'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { action, state } = useStateMachine(updateAction)

  let navigate = useNavigate()

  function onSubit(data) {
    action(data)
    navigate('/pagamento')
  }

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h1>Login</h1>

      <label>
        Usuário:
        <input name="user" ref={register} defaultValue={state.data.user} />
      </label>

      <label>
        Senha:
        <input
          name="password"
          ref={register}
          defaultValue={state.data.password}
        />
      </label>
      <input type="submit" value="login" />
    </form>
  )
}
