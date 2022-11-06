import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import calculationsImg from "../../assets/img/calculations.png"
import { changeStatus, updateData } from '../../redux/actions/calck'

import calculation from '../../services/calculation'
const Calculations = () => {
  const dispatch = useDispatch()
  const { table } = useSelector((state) => state.activeTable)
  const onClickMakeCalculations = async () => {
    const answer = calculation(table)
    if (!answer.some(isNaN)) {
      await dispatch(changeStatus(true))
      await dispatch(updateData(answer))
    } else {
      await dispatch(changeStatus(false))
      alert("неправильно введены данные")
    }
  }
  return (
    <div className="box">
      <div className="control-block__btn" onClick={() => onClickMakeCalculations()}>
        <img
          className="btn__img"
          src={calculationsImg}
          alt="img" />
        <div className="btn__text">Расчет</div>
      </div >
    </div>
  )
}

export default Calculations