import React from 'react'

import { useSelector } from 'react-redux'
import Chart from './Chart'
const Calck = () => {
  const { humidity, ash, heat } = useSelector((state) => state.calck)
  return (
    <div>
      {humidity && ash && heat &&
        <div>
          1. {humidity.toFixed(2)}
          <p></p>
          2. {ash.toFixed(2)}
          <p></p>
          3. {heat.toFixed(2)}
        </div>
      }
      <Chart />
    </div>
  )
}

export default Calck