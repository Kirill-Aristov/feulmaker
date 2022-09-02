import React from 'react'

import HeaderMenu from "./components/HeaderMenu"
import { CreateRows, CreateHeader, ReadyTable, Calculations, SaveTable, ClearTable, Settings } from './components/controlBlock'
import Table from './components/Table'



const App = () => {
  return (
    <div>
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
              <ClearTable />
            </div>
            <Settings />
          </div>
        </div>
      </header>
      <main>
        <Table />
      </main>
    </div >
  )
}

export default App