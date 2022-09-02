import React from 'react'
import readyTableImg from "../../assets/img/ready-table.png"
const ReadyTable = () => {
  return (
    <div className="control-block__btn">
    <img
      className="btn__img"
      src={readyTableImg}
      alt="img" />
    <div className="btn__text">Готовые<br />таблицы</div>
  </div>
  )
}

export default ReadyTable