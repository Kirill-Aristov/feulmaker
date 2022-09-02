import React, { useState } from 'react'
import clearTableImg from "../../assets/img/clear-table.png"
import { clearTable } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
const ClearTable = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <div className="control-block__btn" onClick={() => setModalVisible(!modalVisible)}>
        <img
          className="btn__img"
          src={clearTableImg}
          alt="img" />
        <div className="btn__text">Очистить<br />таблицу</div>
      </div>
      {
        modalVisible &&
        <div className="modal-clear">
          <h2>Очистить таблицу?</h2>
          <div className="modal-clear__btn">
            <button type="button"
              onClick={() => {
                dispatch(clearTable())
                setModalVisible(!modalVisible)
              }}>Да</button>
            <button type="button" onClick={() => setModalVisible(!modalVisible)}>Нет</button>
          </div>
        </div>
      }
    </>
  )
}

export default ClearTable