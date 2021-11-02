import React from 'react'
import './formSubmit.scss'

function FormSubmit({ name, type, }) {
  return (
    <button className='formSubmit' type={type}>
      {name}
    </button>
  )
}

export default  FormSubmit;