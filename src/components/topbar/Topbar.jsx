import React from 'react'
import "./topbar.css"
import { NotificationsNone,Language,Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>
            Iamadmin
          </span>
        </div>
        <div className="topRight">
          <div className='topbarIconContainer'>
            <NotificationsNone/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings/>
          </div>
          <img alt="sorry" src="https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg" className='topAvatar'/>
        </div>
      </div>
    </div>
  )
}
