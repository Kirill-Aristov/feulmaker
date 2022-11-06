import React, { useEffect, useRef, useState } from 'react'

const Burger = () => {
  const [switching, setSwitching] = useState(false)

  const isActiveMenu = useRef()
  const isActiveBurger = useRef()
  useEffect(() => {
    const onClickBurgerVisible = (event) => {
      if (!event.path.includes(isActiveMenu.current) && !event.path.includes(isActiveBurger.current)) {
        setSwitching(false)
      }
    }
    document.body.addEventListener("click", onClickBurgerVisible)
    return () => {
      document.body.removeEventListener("click", onClickBurgerVisible)
    }
  }, [])
  return (
    <>
      <div className="header-menu">
        <div className="header-menu__title">Расчет теплоты сгорания</div>
        <div ref={isActiveBurger} className={`burger ${switching ? "active" : ""}`} onClick={() => setSwitching(!switching)}>
          <span></span>
        </div>
      </div>
      <div ref={isActiveMenu} className={`burger-menu ${switching ? "active" : ""}`}>
        <ul>
          <li className="burger-menu__link">Инструкция по применению</li>
          <li className="burger-menu__link">Справочные данные</li>
          <li className="burger-menu__link">Формулы</li>
        </ul>
      </div>
    </>
  )
}

export default Burger