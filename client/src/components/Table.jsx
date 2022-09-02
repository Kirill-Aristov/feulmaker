import React, { useState, useEffect } from 'react'
import Rows from './Rows.tsx'
import HeaderRows from './HeaderRows'
import { useSelector } from 'react-redux'
import rowsNumber from '../utils/rowsNumber'
const Table = () => {
  const { table } = useSelector((state) => state.tableActive)
  useEffect(() => {
    rowsNumber()
    console.log(table)
  }, [table])
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
            <th>Зольность на сухую мас. %</th>
            <th>Теплота сгорания на сухую/без. массу, МДж/кг</th>
          </tr>
        </thead>
        <tbody>
          {table &&
            table.map((item, index) => (
              item.rows === "rows" ?
                <Rows key={index} {...item} />
                :
                <HeaderRows key={index} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table