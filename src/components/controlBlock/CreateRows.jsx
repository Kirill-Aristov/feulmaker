import React from 'react'
import createRowsImg from "../../assets/img/create-rows.png"
import { createRows } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
import rowsNumber from "../../utils/rowsNumber"

const CreateRows = () => {
  const dispatch = useDispatch()
  const onClickCreateRows = async () => {
    await dispatch(createRows())
    await rowsNumber()
  }
  return (
    <div className="box">
      <div className="control-block__btn" onClick={() => onClickCreateRows()}>
        <img
          className="btn__img"
          src={createRowsImg}
          alt="img" />
        <div className="btn__text">Добавить<br />строку</div>
      </div>
    </div>
  )
}

export default CreateRows