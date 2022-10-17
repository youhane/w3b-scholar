import React from 'react'
import { Wrapper } from './Input.styles'

function Input({name, label, type, placeholder, value, onChange}) {
  return (
    <Wrapper>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </Wrapper>
  )
}

export default Input