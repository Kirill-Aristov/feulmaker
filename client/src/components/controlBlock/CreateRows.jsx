import React from 'react'
import createRowsImg from "../../assets/img/create-rows.png"
import { createRows } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
const CreateRows = () => {
  const dispatch = useDispatch()
  return (
    <div className="control-block__btn" onClick={() => dispatch(createRows("rows"))}>
      <img
        className="btn__img"
        src={createRowsImg}
        alt="img" />
      <div className="btn__text">Добавить<br />строку</div>
    </div>
  )
}

export default CreateRows