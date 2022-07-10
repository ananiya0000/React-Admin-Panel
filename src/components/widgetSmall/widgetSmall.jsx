import React from 'react'
import "./widgetSmall.css"
import {Visibility} from '@material-ui/icons'

export default function widgetsmall() {
  return (
    <div className='widgetSmall'>
        <span className='widgetSmallTitle'>
            New Join Members
            <ul className='widgetSmallList'>
                <li className='widgetSmallListItem'>
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg" alt="sorry" className='widgetSmallImg'/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallUsername'>Anna Keller</span>
                        <span className='widgetSmallUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>Display
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg" alt="sorry" className='widgetSmallImg'/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallUsername'>Anna Keller</span>
                        <span className='widgetSmallUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>Display
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg" alt="sorry" className='widgetSmallImg'/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallUsername'>Anna Keller</span>
                        <span className='widgetSmallUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>Display
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg" alt="sorry" className='widgetSmallImg'/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallUsername'>Anna Keller</span>
                        <span className='widgetSmallUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>Display
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg" alt="sorry" className='widgetSmallImg'/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallUsername'>Anna Keller</span>
                        <span className='widgetSmallUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>Display
                    </button>
                </li>

            </ul>
        </span>
    </div>
  )
}
