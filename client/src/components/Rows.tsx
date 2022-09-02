import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRows, updateTable } from '../redux/actions/actions'
import debounce from "lodash.debounce"


const Rows = ({ rowsTitle, massa, humidity, ashContent, heat }) => {

  const dispatch = useDispatch()
  const [rowsData, setRowsData] = React.useState<object>({})
  const [activeRows, setActiveRows] = React.useState<number>(0)
  const [name, setName] = React.useState<string>(rowsTitle)
  const [massaNum, setMassaNum] = React.useState<number>(massa)
  const [humidityNum, setHumidityNum] = React.useState<number>(humidity)
  const [ashContentNum, setAshContentNum] = React.useState<number>(ashContent)
  const [heatNum, setHeatNum] = React.useState<number>(heat)

  const onClickRemoveRows = (index) => {
    dispatch(removeRows(index.target.parentNode.rowIndex))
  }

  React.useEffect(() => {
    setRowsData({
      rows: "rows",
      rowsTitle: name,
      massa: massaNum,
      humidity: humidityNum,
      ashContent: ashContentNum,
      heat: heatNum
    })
  }, [name])

  React.useEffect(() => {
    debounce(() => {
      dispatch(updateTable([activeRows, rowsData]))
    }, 500)
  }, [rowsData])
  const onChangeInput = (fun, target) => {
    fun(target.value)
    setActiveRows(target.parentNode.parentNode.rowIndex)
  }
  return (
    <tr>
      <td className="delet-rows" onClick={(index) => onClickRemoveRows(index)}></td>
      <td className="number__rows"></td>
      <td>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeInput(setName, event.target)
          }}
          value={name} placeholder="Введите название" autoComplete="off" type="text" />
      </td>
      <td>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMassaNum(event.target.value)
          }}
          value={massaNum} autoComplete="off" type="number" />
      </td>
      <td>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setHumidityNum(event.target.value)
          }}
          value={humidityNum} autoComplete="off" type="number" />
      </td>
      <td>
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setAshContentNum(event.target.value)
        }} value={ashContentNum} autoComplete="off" type="number" />
      </td>
      <td>
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setHeatNum(event.target.value)
        }} value={heatNum} autoComplete="off" type="number" />
      </td>
    </tr>
  )
}

export default Rows