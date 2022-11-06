import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import readyTableImg from "../../assets/img/ready-table.png"
import { addReadyMadeTable } from '../../redux/actions/actions'
import { removeListTable } from '../../redux/actions/table'
import rowsNumber from '../../utils/rowsNumber'
const ReadyTable = () => {
  const { tableLocal } = useSelector((state) => state.tableLocal)
  const dispatch = useDispatch()
  const [readyDropDownMenu, setReadyDropDownMenu] = React.useState(false)

  const isVisibleModalReady = React.useRef("")
  const isVisibleModalReadyLists = React.useRef("")

  React.useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isVisibleModalReady.current) && !event.path.includes(isVisibleModalReadyLists.current)) {
        setReadyDropDownMenu(false)
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])
  const onClcikCreatingSavedTable = async (list) => {
    for (const index of tableLocal.savedTable) {
      if (index.category === list.category) {
        await dispatch(addReadyMadeTable(index.rows))
        await rowsNumber()
      }
    }
    setReadyDropDownMenu(false)
  }
  const onClickRemoveList = (category) => {
    if (category === 1) {
      return alert("Нельзя удалить данную строку")
    } else {
      dispatch(removeListTable(category))
      setReadyDropDownMenu(true)
    }
  }
  return (
    <div className="box">
      <div ref={isVisibleModalReady} className="control-block__btn" onClick={() => setReadyDropDownMenu(!readyDropDownMenu)}>
        <img
          className="btn__img"
          src={readyTableImg}
          alt="img" />
        <div className="btn__text">Готовые<br />таблицы</div>
      </div>
      {<div ref={isVisibleModalReadyLists}
        className={`modal-lists ready-lists ${readyDropDownMenu ? "visible" : ""}`}>
        {tableLocal.savedTable !== 0 &&
          tableLocal.savedTable.map((list) => (
            <div key={list.category} className="ready-save">
              <li
                onClick={() => onClcikCreatingSavedTable(list)}>
                {list.title}
              </li>
              <span className="ready-save__clear" onClick={() => onClickRemoveList(list.category)}></span>
            </div>
          ))
        }
      </div>
      }
    </div>
  )
}

export default ReadyTable