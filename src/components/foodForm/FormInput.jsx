import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  return (
    <div className="form-input">
      <input 
        placeholder={props.placeholder}
        name={props.name}
        aria-label={props.placeholder}/>
    </div>
  )
}

export default FormInput