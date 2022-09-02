import React from 'react'
import saveTableImg from "../../assets/img/save-table.png"
const SaveTable = () => {
  return (
    <div className="control-block__btn">
    <img
      className="btn__img"
      src={saveTableImg}
      alt="img" />
    <div className="btn__text">Сохранить<br />таблицу</div>
  </div>
  )
}

export default SaveTable