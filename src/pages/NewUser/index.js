import React from 'react'
import { useForm, FormContext, useFormContext } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { useNavigate } from 'react-router-dom'
import updateAction from '../updateAction'

function FormControl({ text, name, width, validations, defaultValue }) {
  const { errors, register } = useFormContext()

  return (
    <label style={{ width: width || '100%' }}>
      {text}
      <input
        name={name}
        ref={register(validations)}
        defaultValue={defaultValue}
      />
      <div> {errors[name] && <p>{errors[name].message}</p>}</div>
    </label>
  )
}

export default function NewUser() {
  let navigate = useNavigate()
  const { action, state } = useStateMachine(updateAction)

  function onSubit(data) {
    action(data)
    navigate('/pagamento')
  }

  const methods = useForm({
    mode: 'onChange'
  })

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubit)}>
        <h1>Criar Usúario</h1>

        <FormControl
          text="Nome:"
          name="name"
          width="50%"
          validations={{
            required: 'this is a required',
            maxLength: {
              value: 30,
              message: 'Max length is 30'
            }
          }}
          defaultValue={state.data.name}
        />

        <FormControl
          text="Sobrenome:"
          name="lastName"
          width="50%"
          defaultValue={state.data.name}
          validations={{
            required: 'this is a required',
            maxLength: {
              value: 30,
              message: 'Max length is 30'
            }
          }}
        />

        <FormControl
          text="Senha"
          name="password"
          defaultValue={state.data.password}
        />

        <p className="diver">Endereço</p>

        <FormControl
          text="CEP:"
          name="cep"
          defaultValue={state.data.cep}
          ref={{
            required: true
          }}
        />

        <FormControl
          text="País:"
          name="cuntry"
          defaultValue={state.data.contry}
          ref={{
            required: true
          }}
        />

        <FormControl
          text="Estado:"
          name="state"
          defaultValue={state.data.state}
          ref={{
            required: true
          }}
        />

        <FormControl
          text="Cidade:"
          name="city"
          defaultValue={state.data.city}
          ref={{
            required: true
          }}
        />

        <FormControl
          text="Bairro:"
          name="district"
          defaultValue={state.data.district}
          ref={{
            required: true
          }}
        />

        <FormControl
          text="Numero:"
          name="number"
          defaultValue={state.data.number}
          ref={{
            required: true
          }}
        />

        <p className="diver">Contato</p>

        <FormControl
          text="Email:"
          name="email"
          defaultValue={state.data.password}
          ref={{
            required: 'this is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address'
            }
          }}
        />

        <FormControl
          text="Telefone:"
          name="phoneNumber"
          ref={{
            required: 'this is required'
          }}
          defaultValue={state.data.password}
        />

        <FormControl
          text="Celular:"
          name="email"
          ref={{
            required: 'this is required'
          }}
          defaultValue={state.data.password}
        />

        <button type="submit">Criar Usuário</button>
      </form>
    </FormContext>
  )
}
