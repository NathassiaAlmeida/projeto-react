import React, { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'

const InputData = styled.input`
  width: 190px;
  line-height: 320px;
  padding-left: 8px;
  border-radius:10px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
  outline-color: orange;
`

export default function Input(props:InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputData {...props}/>
  )
}
