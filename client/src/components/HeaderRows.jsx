import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { createPlusRows } from '../redux/actions/actions'

const HeaderRows = ({ headerTitle }) => {
  const [inputChange, setInputChange] = useState(headerTitle)
  const dispatch = useDispatch()
  const onClickPlusRows = (value) => {
    const rows = {
      rows: "rows",
      indexHeader: value.target.parentNode.parentNode.rowIndex,
      rowsTitle: "",
      massa: 0,
      humidity: 0,
      ashContent: 0,
      heat: 0,
    }
    dispatch(createPlusRows(rows))
  }
  return (
    <tr>
      <td className="delet-btn"></td>
      <td colSpan="5">
        <input className="table-header__item" type="text"
          onChange={((event) => {
            setInputChange(event.target.value)
          })}
          value={inputChange} />
      </td>
      <td>
        <button onClick={(value) => onClickPlusRows(value)} className="table-header__btn" type="button">
          Добавить строку
        </button>
      </td>
    </tr>
  )
}

export default HeaderRows