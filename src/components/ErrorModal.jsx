import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAshError } from '../redux/actions/modal'

const ErrorModal = () => {
  const { errorModal } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorModal.ash.active) {
      setTimeout(() => {
        console.log(true)
        dispatch(changeAshError(false))
      }, 5600)
    }
  }, [errorModal.ash])
  return errorModal.section ?
    <div className="section-error">
      {errorModal.massa.active &&
        <div className="section-error__box">
          <div className="section-error__text">
            Ошибка. Общее содержание не должно превышать 100%,
            Ваше содежрание = {errorModal.massa.maxMassa}%
            <span className="section-error__line"></span>
          </div>
        </div>
      }
      {errorModal.ash.active &&
        <div className="section-error__box">
          <div className="section-error__text">
            <span>
              Ошибка. Строка {errorModal.ash.numberRows}
            </span>.
            <p>
              Зольность на сухую массу компонента не должна превышать 100%
            </p>
          </div>
          <span className="section-error__line"></span>
        </div>
      }
      {errorModal.humidity.active &&
        <div className="section-error__box">
          <div className="section-error__text">
            Ошибка. Строка {errorModal.humidity.numberRows}. Влажность компонента не должна превышать 100%
            <span className="section-error__line"></span>
          </div>
        </div>
      }
    </div>
    :
    null
}


export default ErrorModal