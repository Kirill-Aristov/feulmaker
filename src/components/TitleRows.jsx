import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { btnCreateRowsAtTheHeader, removeHeader } from '../redux/actions/actions'
import rowsNumber from '../utils/rowsNumber'
import maxFromTheOrigin from '../utils/maxFromTheOrigin'

const TitleRows = ({ header }) => {
  const [inputChange, setInputChange] = useState(header)
  const dispatch = useDispatch()
  const onClickCreateRows = async (index) => {
    const indexHeader = index.parentNode.parentNode.rowIndex

    await dispatch(btnCreateRowsAtTheHeader(indexHeader))
    await rowsNumber()
  }
  const onClickRemoveHeader = async (indexTargetHeader) => {
    const indexEveryoneHeader = indexTargetHeader.parentNode.rowIndex
    const arrayIdRows = [];// местоположение всех индексов заголовков
    document.querySelectorAll(".table-header__item").forEach((tableHeader) => {
      arrayIdRows.push(tableHeader.parentNode.parentNode.rowIndex);
    });
    const nearestHeader = await maxFromTheOrigin(arrayIdRows, indexEveryoneHeader);
    if (nearestHeader === 0) {
      //написать систему удаление при одном заголовке расчтитать количество строк до конца таблицы вместо 100
      await dispatch(removeHeader([indexEveryoneHeader, 100]))
    } else {
      await dispatch(removeHeader([indexEveryoneHeader, nearestHeader - indexEveryoneHeader + 1]))
    }
    await rowsNumber()
  }
  return (
    <tr>
      <td onClick={(index) => onClickRemoveHeader(index.target)}></td>
      <td colSpan="5">
        <input className="table-header__item" type="text"
          onChange={((event) => {
            setInputChange(event.target.value)
          })}
          value={inputChange} />
      </td>
      <td>
        <div className="table-header__btn" type="button" onClick={(index) => onClickCreateRows(index.target)}>
          Добавить строку
        </div>
      </td>
    </tr>
  )
}

export default TitleRows