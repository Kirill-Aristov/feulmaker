import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoadModal } from '../../redux/actions/modal'

const LoadTable = () => {
  const { loadModal } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  const isVisibleLoadModal = React.useRef("")
  const activeLoadModal = React.useRef("")

  React.useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isVisibleLoadModal.current) && !event.path.includes(activeLoadModal.current)) {
        dispatch(changeLoadModal(false))
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])
  return (
    <>
      <div className="box">
        <div ref={isVisibleLoadModal} className="control-block__btn" onClick={() => dispatch(changeLoadModal(!loadModal))}>
          <img
            className="btn__img"
            alt="img" />
          <div className="btn__text">Загрузить<br />таблицу</div>
        </div>
      </div>
      {loadModal &&
        <div className="modal-load" ref={activeLoadModal}>
          <div className="modal-load__title">Загрузить файл</div>
          <input type="file" className="modal-load__input" placeholder="Выберите или перетащите файл формата .xlsx" />
          <div className="modal-load__help">
            <p>1. Строка (A1,B1,C1 и т.д.) не учитывается при добавление в таблицу</p>
            <p>2. Таблица должна содержаться на 1 листе, дополнительно созданные листы могут привести к ошибке</p>
          </div>
        </div>
      }
    </>
  )
}

export default LoadTable