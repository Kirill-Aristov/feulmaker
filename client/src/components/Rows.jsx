import React, { useState, useCallback, useEffect } from 'react'

import debounce from "lodash.debounce"

import { updateTable } from "../redux/actions/actions"
import { useDispatch, useSelector } from 'react-redux'

const Rows = ({ numberRows }) => { //numberRows = берет данные из redux соответсвуещей строке
  const { rowsName, massa, humidity, ashContent, heat } = useSelector((state) => state.tableControl)
  const [name, setName] = useState(rowsName[numberRows])
  const [massaNum, setMassaNum] = useState(massa[numberRows])
  const [humidityNum, setHumidityNum] = useState(humidity[numberRows])
  const [ashContentNum, setAshContentNum] = useState(ashContent[numberRows])
  const [heatNum, setHeatNum] = useState(heat[numberRows])
  const dispatch = useDispatch()
  const updateData = useCallback(
    debounce((event, stateName) => {
      dispatch(updateTable([event.target.value, numberRows, stateName]))
    }, 400), []
  )
 
  return (
    <tr>
      <td className="delet-rows"></td>
      <td className="number__rows">{numberRows + 1}</td>
      <td>
        <input
          onChange={(event => {
            setName(event.target.value)
            updateData(event, rowsName)
          })} value={name} autoComplete="off" type="text" />
      </td>
      <td>
        <input onChange={(event => {
          setMassaNum(event.target.value)
          updateData(event, massa)
        })} value={massaNum} autoComplete="off" maxLength="6" type="number" />
      </td>
      <td>
        <input onChange={(event => {
          setHumidityNum(event.target.value)
          updateData(event, humidity)
        })} value={humidityNum} autoComplete="off" maxLength="6" type="number" />
      </td>
      <td>
        <input onChange={(event => {
          setAshContentNum(event.target.value)
          updateData(event, ashContent)
        })} value={ashContentNum} autoComplete="off" maxLength="6" type="number" />
      </td>
      <td>
        <input onChange={(event => {
          setHeatNum(event.target.value)
          updateData(event, heat)
        })} value={heatNum} autoComplete="off" maxLength="6" type="number" />
      </td>
    </tr>
  )
}

export default Rows