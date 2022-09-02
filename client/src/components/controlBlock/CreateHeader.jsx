import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import createHeaderImg from "../../assets/img/create-header.png"
import { createHeader, createPlusRows } from '../../redux/actions/actions'
import { dataHeader } from '../../utils/dataHeader'
const CreateHeader = () => {
  const lists = [
    { title: "Добавить заголовок", category: 0 },
    { title: "Органические отходы", category: 1 },
    { title: "Полимеры", category: 2 },
    { title: "Макулатура", category: 3 },
    { title: "Дерево", category: 4 },
    { title: "Текстиль", category: 5 },
    { title: "Комбинированные материалы", category: 6 },
    { title: "Металлы", category: 7 },
    { title: "Стекло", category: 8 },
    { title: "Опасные материалы", category: 9 },
    { title: "Инертные материалы", category: 10 },
    { title: "Прочие материалы", category: 11 }
  ]
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const isVisibleModal = useRef("")
  useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isVisibleModal.current)) {
        setModalVisible(false)
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])
  const onClickCreateHeader = (list) => {
    const header = {}
    if (list.category === 0) {
      header.title = list.title;
      dispatch(createHeader(header))
    } else {
      header.title = list.title;
      dispatch(createHeader(header))
      for (const key in dataHeader) {
        if (dataHeader[key].category === list.category) {
          const rows = {
            rows: "rows",
            rowsTitle: dataHeader[key].title,
            massa: dataHeader[key].content,
            humidity: dataHeader[key].humeidty,
            ashContent: dataHeader[key].ash,
            heat: dataHeader[key].heat,
          }
          dispatch(createPlusRows(rows))
        }
      }
    }
    setModalVisible(false)
  }
  return (
    <div ref={isVisibleModal} className="control-block__btn" onClick={() => setModalVisible(!modalVisible)}>
      <img
        className="btn__img"
        src={createHeaderImg}
        alt="img" />
      <div className="btn__text">Добавить<br />заголовок</div>
      {<div className={`modal-lists ${modalVisible ? "visible" : ""}`}>
        {
          lists.map((list, index) => (
            <li key={index} onClick={() => onClickCreateHeader(list)}>{list.title}</li>
          ))
        }
      </div>
      }
    </div >
  )
}
export default CreateHeader