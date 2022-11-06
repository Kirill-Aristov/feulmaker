import React from 'react'
import createHeaderImg from "../../assets/img/create-header.png"
import { useDispatch } from 'react-redux'
import dataHeaderTitle from '../../assets/data/dataHeaderTitle'
import { createHeader } from '../../redux/actions/actions'
import rowsNumber from '../../utils/rowsNumber'

const CreateHeader = () => {
  const [headerDropDownMenu, setHeaderDropDownMenu] = React.useState(false)
  const dispatch = useDispatch()
  const lists = [
    { title: "Добавить заголовок", category: "0" },
    { title: "Органические отходы", category: "1" },
    { title: "Полимеры", category: "2" },
    { title: "Макулатура", category: "3" },
    { title: "Дерево", category: "4" },
    { title: "Текстиль", category: "5" },
    { title: "Комбинированные материалы", category: "6" },
    { title: "Металлы", category: "7" },
    { title: "Стекло", category: "8" },
    { title: "Опасные материалы", category: "9" },
    { title: "Инертные материалы", category: "10" },
    { title: "Прочие материалы", category: "11" }
  ]
  const isVisibleModalHeader = React.useRef("")

  React.useEffect(() => {
    const onClickModalVisible = (event) => {
      if (!event.path.includes(isVisibleModalHeader.current)) {
        setHeaderDropDownMenu(false)
      }
    }
    document.body.addEventListener("click", onClickModalVisible)
    return () => {
      document.body.removeEventListener("click", onClickModalVisible)
    }
  }, [])

  const onClickCreateHeader = async (list) => {
    const header = {
      keyRows: Date.now(),
      rows: "header",
      header: list.title,
    }
    if (list.category === "0") {
      header.header = ""
      await dispatch(createHeader(header))
    } else {
      await dispatch(createHeader(header))
      for (const iterator of dataHeaderTitle) {
        if (iterator.category === list.category) {
          const rows = {
            keyRows: Date.now(),
            rows: "rows",
            rowsTitle: iterator.title,
            massa: iterator.content,
            humidity: iterator.humeidty,
            ash: iterator.ash,
            heat: iterator.heat,
          }
          await dispatch(createHeader(rows))
        }
      }
    }
    await rowsNumber()
    setHeaderDropDownMenu(false)
  }
  return (
    <div className="box">

      <div ref={isVisibleModalHeader} className="control-block__btn" onClick={() => setHeaderDropDownMenu(!headerDropDownMenu)}>
        <img
          className="btn__img"
          src={createHeaderImg}
          alt="img" />
        <div className="btn__text">Добавить<br />заголовок</div>
      </div >
      {lists &&
        <div className={`modal-lists ${headerDropDownMenu ? "visible" : ""}`}>
          {
            lists.map((list, index) => (
              <li key={index} onClick={() => onClickCreateHeader(list)}>{list.title}</li>
            ))
          }
        </div>
      }
    </div>
  )
}
export default CreateHeader