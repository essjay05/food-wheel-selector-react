import React, { useEffect, useRef, useState } from 'react'
import './foodForm.css'
import FormInput from './FormInput'

const FoodForm = ({ foodList }) => {

  // Update foodCategories based on localstorage values from store
  const [foodCategories, setFoodCategories] = useState(foodList)

  useEffect(() => {
    const initialFoodList = window.localStorage.getItem('FOOD_CATEGORIES')
    // initially load using the localStorage foodList if not null
    if (initialFoodList !== null) setFoodCategories(JSON.parse(initialFoodList))
  }, [])

  useEffect(() => {
    // set localStorage values to default foodList array from props
    window.localStorage.setItem('FOOD_CATEGORIES', JSON.stringify(foodCategories))
    // reload anytime foodCategories updates
  }, [foodCategories])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const dataToSubmit = Object.fromEntries(data.entries())
    // Loop thru dataToSubmit and if there's empty input values,
    // use the key/placeholder value as the default input value
    for (const input in dataToSubmit) {
      if (!dataToSubmit[input]) {
        dataToSubmit[input] = input
      }
    }
    console.log(dataToSubmit)
    console.log('Object.values(dataToSubmit)')
    console.log(Object.values(dataToSubmit))
    // update FoodCategories to the ones submitted in the form
    setFoodCategories(Object.values(dataToSubmit))
  }

  return (
    <section className="form-section">
      <h2 className="form-title">Food Form</h2>
      <form
        className="food-form"
        onSubmit={handleSubmit}>
        {foodCategories.map((food, index) => (
          <FormInput 
            key={index}
            name={foodCategories[index]}
            placeholder={foodCategories[index]}/>
        ))}
        <button
          className="form-btn"
          type="submit">Submit</button>
      </form>
    </section>
  )
}

export default FoodForm