import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { useNavigate } from 'react-router-dom'
import updateAction from './updateAction'

// https://github.com/s-yadav/react-number-format
// https://react-hook-form.com/advanced-usage/#WizardFormFunnel

export default function Payment() {
  const { register, handleSubmit } = useForm()
  const [disabled, setDisabled] = useState(false)
  const { state, action } = useStateMachine(updateAction)

  let navigate = useNavigate()

  function onSubit(data) {
    setDisabled(true)

    setTimeout(() => {
      navigate('/concluido')
    }, 4000)

    action(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h1>Pagamento</h1>

      <label>
        Nome no Cartão:
        <input
          name="cardNumber"
          ref={register}
          defaultValue={state.data.cardNumber}
        />
      </label>

      <label>
        Numero do Cartão:
        <input
          name="nameCard"
          ref={register}
          defaultValue={state.data.nameCard}
        />
      </label>

      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          ref={register}
          defaultValue={state.data.yearsOfExp}
        />
      </label>

      <button className="btn-progress" type="submit" disabled={disabled}>
        Pagar
      </button>
    </form>
  )
}
