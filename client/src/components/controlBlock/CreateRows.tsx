import React from 'react'
import createRowsImg from "../../assets/img/create-rows.png"
import { createRows } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'




const CreateRows = (): JSX.Element => {
  const dispatch = useDispatch()
  const onClickCreateRows = () => {
    const rows: Rows = {
      rows: "rows",
      rowsTitle: "",
      massa: "",
      humidity: "",
      ashContent: "",
      heat: "",
    }
    dispatch(createRows(rows))
  }
  return (
    <div className="control-block__btn" onClick={() => onClickCreateRows()}>
      <img
        className="btn__img"
        src={createRowsImg}
        alt="img" />
      <div className="btn__text">Добавить<br />строку</div>
    </div>
  )
}

export default CreateRows