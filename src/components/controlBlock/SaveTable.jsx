import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import saveTableImg from "../../assets/img/save-table.png"
import { changeSavedModal } from '../../redux/actions/modal'
import { savedListTable } from '../../redux/actions/table'

const SaveTable = () => {
  const { table } = useSelector((state) => state.activeTable)
  const { savedModal } = useSelector((state) => state.modal)
  const [inputNameTable, setInputNameTable] = React.useState("")
  const [buttonActive, setButtonActive] = React.useState(true)

  const dispatch = useDispatch()
  const onClickSave = async () => {
    await setInputNameTable(inputNameTable.trim())
    await dispatch(savedListTable([inputNameTable, table]))
    await dispatch(changeSavedModal(false))
    await setInputNameTable("")
    await setButtonActive(true)
  }

  const isActiveSaveModal = React.useRef("")
  const isVisibleSaveModal = React.useRef("")
  React.useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isActiveSaveModal.current) && !event.path.includes(isVisibleSaveModal.current)) {
        dispatch(changeSavedModal(false))
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])

  const onChangeInputTrim = (event) => {
    setInputNameTable(event.value)
    if (inputNameTable.trim() !== "") {
      setButtonActive(false)
    } else {
      setButtonActive(true)
    }
  }
  return (
    <>
      <div className="box">
        <div ref={isVisibleSaveModal} className="control-block__btn" onClick={() => dispatch(changeSavedModal(!savedModal))}>
          <img
            className="btn__img"
            src={saveTableImg}
            alt="img" />
          <div className="btn__text">Сохранить<br />таблицу</div>
        </div>
      </div>
      {savedModal &&
        <div ref={isActiveSaveModal} className="modal-save">
          <input
            value={inputNameTable}
            onChange={(event) => onChangeInputTrim(event.target)}
            type="text"
            placeholder="Введите название (15 символов)"
            maxLength={15} />
          <div className="modal-saved__btn">
            <button type="button" className="btn" disabled={buttonActive} onClick={() => onClickSave()}>Сохранить</button>
            <button type="button" onClick={() => dispatch(changeSavedModal(false))}>Отмена</button>
          </div>
        </div>
      }
    </>
  )
}

export default SaveTable