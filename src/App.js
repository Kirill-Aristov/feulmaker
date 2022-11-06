import React from 'react'

import HeaderMenu from "./components/HeaderMenu"
import { CreateRows, CreateHeader, ReadyTable, Calculations, SaveTable, ClearTable, LoadTable } from './components/controlBlock'
import Table from './components/Table'
import ErrorModal from "./components/ErrorModal"
import { useSelector } from 'react-redux'
import Calck from './calculations/Calck'

const App = () => {
  const { status } = useSelector((state) => state.calck)
  const { clearModal, loadModal, savedModal } = useSelector((state) => state.modal)
  const isVisibleCalck = React.useRef("")
  React.useEffect(() => {
    if (status) {
      isVisibleCalck.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [status])
  const [activeFon, setActiveFon] = React.useState("")
  React.useEffect(() => {
    if (clearModal || loadModal || savedModal) {
      setActiveFon("fon")
    } else {
      setActiveFon("")
    }
  }, [clearModal, loadModal, savedModal])
  return (
    <>
      <header>
        <div className="header">
          <HeaderMenu />
          <div className="control">
            <div className="control-block">
              <CreateRows />
              <CreateHeader />
              <ReadyTable />
              <Calculations />
              <SaveTable />
              {/* <LoadTable /> */}
              <ClearTable />
            </div>
            {/* <Settings /> */}
          </div>
        </div>
      </header>
      <main>
        <Table />
      </main>
      {status &&
        <div ref={isVisibleCalck}>
          <Calck />
        </div>
      }
      {activeFon !== "" &&
        <div className={activeFon}>
        </div>
      }
      <ErrorModal />
    </>
  )
}

export default App