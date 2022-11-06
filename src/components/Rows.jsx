import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRows, updateTable } from '../redux/actions/actions'
import rowsNumber from '../utils/rowsNumber'


const Rows = ({ keyRows, rows, rowsTitle, massa, humidity, ash, heat }) => {
  const dispatch = useDispatch()
  const [rowsDataUpdata, setRowsDataUpdata] = React.useState({})
  const [activeRows, setActiveRows] = React.useState(0)
  const [title, setTitle] = React.useState(rowsTitle)
  const [massaNum, setMassaNum] = React.useState(massa)
  const [humidityNum, setHumidityNum] = React.useState(humidity)
  const [ashContentNum, setAshContentNum] = React.useState(ash)
  const [heatNum, setHeatNum] = React.useState(heat)
  const onClickRemoveRows = async (index) => {
    await dispatch(removeRows(index.target.parentNode.rowIndex))
    await rowsNumber()
  }
  React.useEffect(() => {
    setRowsDataUpdata({
      keyRows: keyRows,
      rows: rows,
      rowsTitle: title,
      massa: massaNum,
      humidity: humidityNum,
      ash: ashContentNum,
      heat: heatNum
    })
  }, [title, massaNum, humidityNum, ashContentNum, heatNum])

  React.useEffect(() => {
    dispatch(updateTable([activeRows, rowsDataUpdata]))
  }, [rowsDataUpdata]);

  const onChangeInputTitle = (target) => {
    setTitle(target.value)
    setActiveRows(target.parentNode.parentNode.rowIndex)
  }
  const onChangeInput = (fun, target) => {
    fun(Number(target.value))
    setActiveRows(target.parentNode.parentNode.rowIndex)
  }
  return (
    <tr>
      <td onClick={(index) => onClickRemoveRows(index)}></td>
      <td className="number__rows"></td>
      <td>
        <input
          onChange={(event) => {
            onChangeInputTitle(event.target)
          }}
          value={title} placeholder="Введите название компонента" autoComplete="off" type="text" />
      </td>
      <td>
        <input
          onChange={(event) => {
            onChangeInput(setMassaNum, event.target)
          }}
          value={massaNum} autoComplete="off" placeholder="Значение, %" type="number" />
      </td>
      <td>
        <input
          onChange={(event) => {
            onChangeInput(setHumidityNum, event.target)
          }}
          value={humidityNum} autoComplete="off" placeholder="Значение, %" type="number" />
      </td>
      <td>
        <input onChange={(event) => {
          onChangeInput(setAshContentNum, event.target)
        }} value={ashContentNum} autoComplete="off" placeholder="Значение, %" type="number" />
      </td>
      <td>
        <input onChange={(event) => {
          onChangeInput(setHeatNum, event.target)
        }} value={heatNum} autoComplete="off" placeholder="Значение, МДж/кг" type="number" />
      </td>
    </tr>
  )
}

export default Rows