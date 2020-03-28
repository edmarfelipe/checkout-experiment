import React from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from './updateAction'

export default function Result() {
  const { state } = useStateMachine(updateAction)

  return (
    <>
      <h1>Concluido:</h1>
      <div className="container">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  )
}
