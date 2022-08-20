import React, { useRef } from 'react'
import './foodForm.css'
import FormInput from './FormInput'

const FoodForm = () => {
  const foodInput1Ref = useRef()
  const foodInput2Ref = useRef()
  const foodInput3Ref = useRef()
  const foodInput4Ref = useRef()
  const foodInput5Ref = useRef()
  const foodInput6Ref = useRef()
  const foodInput7Ref = useRef()
  const foodInput8Ref = useRef()
  const foodInput9Ref = useRef()
  const foodInput10Ref = useRef()
  const foodInput11Ref = useRef()
  const foodInput12Ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <section className="form-section">
      <h2 className="form-title">Food Form</h2>
      <form
        className="food-form"
        onSubmit={handleSubmit}>
        <FormInput 
          name="foodInput1Ref"
          placeholder="Food type 1"/>
        <FormInput 
          name="foodInput2Ref"
          placeholder="Food type 2"/>
        <FormInput 
          name="foodInput3Ref"
          placeholder="Food type 3"/>
        <FormInput 
          name="foodInput4Ref"
          placeholder="Food type 4"/>
        <FormInput 
          name="foodInput5Ref"
          placeholder="Food type 5"/>
        <FormInput 
          name="foodInput6Ref"
          placeholder="Food type 6"/>
        <FormInput 
          name="foodInput7Ref"
          placeholder="Food type 7"/>
        <FormInput 
          name="foodInput8Ref"
          placeholder="Food type 8"/>
        <FormInput 
          name="foodInput9Ref"
          placeholder="Food type 9"/>
        <FormInput 
          name="foodInput10Ref"
          placeholder="Food type 10"/>
        <FormInput 
          name="foodInput11Ref"
          placeholder="Food type 11"/>
        <FormInput 
          name="foodInput12Ref"
          placeholder="Food type 12"/>
        <button
          className="form-btn"
          type="submit">Submit</button>
      </form>
    </section>
  )
}

export default FoodForm