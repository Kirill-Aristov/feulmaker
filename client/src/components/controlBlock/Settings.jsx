import React from 'react'
import settingsImg from "../../assets/img/settings.png"
const Settings = () => {
  return (
    <div className="control-block__btn">
    <img
      className="btn__img"
      src={settingsImg}
      alt="img" />
    <div className="btn__text">Настройки</div>
  </div>
  )
}

export default Settings