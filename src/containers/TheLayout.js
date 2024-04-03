import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="dashboard-wrapper">
      <TheHeader/>
      <div className="dashboard-body">
        <TheSidebar/>
      
        <div className="dashboard-content">
          <TheContent/>
          
        </div>
      </div>
    </div>
  )
}

export default TheLayout
