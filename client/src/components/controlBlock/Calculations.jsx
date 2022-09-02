import React from 'react'

import calculationsImg from "../../assets/img/calculations.png"
const Calculations = () => {
  return (
    <div className="control-block__btn">
          <img
            className="btn__img"
            src={calculationsImg}
            alt="img" />
          <div className="btn__text">Расчет</div>
        </div>
  )
}

export default Calculations