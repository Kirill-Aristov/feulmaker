import React from 'react'
import clearTableImg from "../../assets/img/clear-table.png"
import { useDispatch, useSelector } from 'react-redux'
import { clearTable } from '../../redux/actions/actions'
import { changeStatus } from '../../redux/actions/calck'
import { changeModalClear } from '../../redux/actions/modal'
const ClearTable = () => {
  const { clearModal } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const isVisibleModalClear = React.useRef("")
  const buttonClear = React.useRef("")

  React.useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isVisibleModalClear.current) && !event.path.includes(buttonClear.current)) {
        dispatch(changeModalClear(false))
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])
  const onClickClear = () => {
    dispatch(clearTable())
    dispatch(changeModalClear(false))
    dispatch(changeStatus(false))
  }
  return (
    <div className="box">
      <div ref={buttonClear} className="control-block__btn" onClick={() => dispatch(changeModalClear(!clearModal))}>
        <img
          className="btn__img"
          src={clearTableImg}
          alt="img" />
        <div className="btn__text">Очистить<br />таблицу</div>
      </div>
      {
        clearModal && 
        <div ref={isVisibleModalClear} className="modal-clear">
          <h2>Очистить таблицу?</h2>
          <div className="modal-clear__btn">
            <button type="button"
              onClick={() => { onClickClear() }}>Да</button>
            <button type="button" onClick={() => dispatch(changeModalClear(false))}>Нет</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ClearTable