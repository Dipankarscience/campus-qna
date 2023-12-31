import React from 'react'
import QuoraHeader from './QuoraHeader'
import './css/Quora.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

function Quora() {
  return (
    <div className='quora'>
      <QuoraHeader />
      <div className='quora-contents'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default Quora
