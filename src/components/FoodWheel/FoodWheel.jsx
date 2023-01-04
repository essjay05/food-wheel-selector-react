import React, { useEffect } from 'react'
import './FoodWheel.css'

const FoodWheel = () => {

  let spinTime = Math.floor((Math.random() * 3500) + 1)

  const spinWheel = () => {
    const wheel = document.querySelector('.wheel ')
    wheel.style.transform = `rotate(${spinTime}deg)`
    spinTime += Math.floor((Math.random() * 3500) + 1)
  }
  
  // Next feature: Make Food list editable by others
  const foodList = [
    'Sushi',
    'Pizza',
    'Burgers',
    // 'Wings',
    'Dim Sum',
    'Hot Pot',
    'Korean BBQ',
    'Vietnamese',
    // 'Poke',
    // 'Hawaiian',
    'Mexican',
    'Thai'
  ]

  useEffect(() => {
    console.log('foodList')
    console.log(foodList)
  })


  const pieColors = [
    '#FFC312',
    // '#F79F1F',
    '#EE5A24',
    '#B53471',
    // '#833471',
    '#9980FA',
    // '#D980FA',
    '#12CBC4',
    '#1289A7',
    '#0652DD',
    '#006266',
    '#009432',
    '#A3CB38'
  ]


  return (
    <section className='food-wheel-section'>
      <div className='container'>
        <button
          className='spin-btn' onClick={spinWheel}>Spin</button>
        <div className='wheel'>
        {foodList.map((item, index) => (<div 
            key={index}
            className="wheel-slice"
            style={{
              '--i': `${index + 1}`,
              backgroundColor: `${pieColors[index]}`}}>
            <div 
              className="text"
              spellCheck="false">
              {foodList[index]}
            </div>
          </div>))}
        </div>
      </div>

    </section>
  )
}

export default FoodWheel