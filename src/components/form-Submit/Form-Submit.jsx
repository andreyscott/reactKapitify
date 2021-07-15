import React from 'react'
import './Form-Submit.css'

function FormSubmit({ name, type, onClick }) {
  return (
    <button className='formSubmit' type={type}>
      {name}
    </button>
  )
}

export default FormSubmit
