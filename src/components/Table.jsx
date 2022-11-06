import React from 'react'
import Rows from './Rows'
import TitleRows from './TitleRows'
import { useDispatch, useSelector } from 'react-redux'
import { addReadyMadeTable } from '../redux/actions/actions'
import rowsNumber from '../utils/rowsNumber'
const Table = () => {
  const { tableLocal } = useSelector((state) => state.tableLocal)
  const { table } = useSelector((state) => state.activeTable)
  const dispatch = useDispatch()
  React.useEffect(() => {
    const addTable = async () => {
      if (tableLocal.lastTable.length !== 0) {
        await dispatch(addReadyMadeTable(tableLocal.lastTable))
        await rowsNumber()
      }
    }
    addTable()
  }, [])
  return (
    <div className="main">
      <table className="table">
        <thead className="table__header">
          <tr>
            <th></th>
            <th>№</th>
            <th>Название компонента</th>
            <th>Содержание, %</th>
            <th>Влажность, %</th>
            <th>Зольность на сухую массу %</th>
            <th>Теплота сгорания на сухую/беззольную массу, МДж/кг</th>
          </tr>
        </thead>
        <tbody>
          {table &&
            table.map((item, index) => (
              item.rows === "rows" ?
                <Rows key={item.keyRows} {...item} />
                :
                <TitleRows key={item.keyRows} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table