import React, { useState } from 'react'
import './spinner.css'

const Spinner = () => {
  // const [selectedFood, setSelectedFood] = useState('')
  const [spinStart, setSpinStart] = useState({name: 'circle'})

  const startRotation = () => {
    setSpinStart({name: 'circle start-rotate'})
    setTimeout(() => {
      setSpinStart({name: 'circle start-rotate stop-rotate'})
    }, spinTime)
  }

  const spinTime = Math.floor((Math.random() * 3500) + 1)

  // const foodObjectList = [
  //   {
  //     name: 'Sushi',
  //     bgColor: 'rgba(255, 195, 18, 1)'
  //   },
  //   {
  //     name: 'Pizza',
  //     bgColor: 'rgba(247, 159, 31, 1)'
  //   },
  //   {
  //     name: 'Burgers',
  //     bgColor: 'rgba(238, 90, 36, 1)'
  //   },
  //   {
  //     name: 'Wings',
  //     bgColor: 'rgba(181, 52, 113, 1)'
  //   },
  //   {
  //     name: 'Dim Sum',
  //     bgColor: 'rgba(131, 52, 113, 1)'
  //   },
  //   {
  //     name: 'Hot Pot',
  //     bgColor: 'rgba(153, 128, 250, 1)'
  //   },
  //   {
  //     name: 'Thai',
  //     bgColor: 'rgba(217, 128, 250, 1)'
  //   },
  //   {
  //     name: 'Korean BBQ',
  //     bgColor: 'rgba(18, 203, 196, 1)'
  //   },
  //   {
  //     name: 'Vietnamese',
  //     bgColor: 'rgba(18, 137, 167, 1)'
  //   },
  //   {
  //     name: 'Poke',
  //     bgColor: 'rgba(6, 82, 221, 1)'
  //   },
  //   {
  //     name: 'Mexican',
  //     bgColor: 'rgba(0, 148, 50, 1)'
  //   },
  //   {
  //     name: 'Hawaiian',
  //     bgColor: 'rgba(163, 203, 56, 1)'
  //   },
  // ]

// Next feature: Make Food list editable by others
  const foodList = [
    'Sushi',
    'Pizza',
    'Burgers',
    'Wings',
    'Dim Sum',
    'Hot Pot',
    'Korean BBQ',
    'Vietnamese',
    'Poke',
    'Hawaiian',
    'Mexican',
    'Thai'
  ]

  const pieColors = [
    '#FFC312',
    '#F79F1F',
    '#EE5A24',
    '#B53471',
    '#833471',
    '#9980FA',
    '#D980FA',
    '#12CBC4',
    '#1289A7',
    '#0652DD',
    '#006266',
    '#009432',
    '#A3CB38'
  ]

  // useEffect(() => {
  //   console.log(foodObjectList)
  // }, []) 

  return (
    <section className="spinner-section">
      <div
        className="spinner-btn"
        onClick={startRotation}>
        <p>Spin Wheel!</p>
      </div>
      <div className="spinner-wheel">
        <div className="arrow-pointer"></div>
        <ul className={spinStart.name}>
          {foodList.map((item, index) => (<li 
            key={index}
            className="spinner-slice"
            style={{
              backgroundColor: `${pieColors[index]}`, 
              transform: `rotate(${index * 30}deg) skewY(-60deg)`}}>
            <div 
              className="text"
              spellCheck="false">
              {foodList[index]}
            </div>
          </li>))}
        </ul>
      </div>
    </section>
  )
}

export default Spinner