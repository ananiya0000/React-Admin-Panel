import React from 'react'
import "./widgetLarge.css"

export default function widgetLarge() {

  const Buttone=({type})=>{
    return <button className={'widgetLargeButton' + type}>{type}</button>
  }

  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>
        Latest transactions
      </h3>
      <table className='widgetLargeTable'>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'>
            Customer
          </th>
          <th className='widgetLargeTh'>
            Date
          </th>
          <th className='widgetLargeTh'>
            Amount
          </th>
          <th className='widgetLargeTh'>
            Status
          </th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img className='widgetLargeImg' src='https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg' alt='sorry'/>
            <span className='widgetLargeName'>Susan Carol</span>
          </td>
          <td className='widgetLargeDate'>
            7 July 2022
          </td>
          <td className='widgetLargeAmount'>
            #122.00
          </td>
          <td className='widgetLargeStatus'>
            <Buttone type ="Approved"/>
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img className='widgetLargeImg' src='https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg' alt='sorry'/>
            <span className='widgetLargeName'>Susan Carol</span>
          </td>
          <td className='widgetLargeDate'>
            7 July 2022
          </td>
          <td className='widgetLargeAmount'>
            #122.00
          </td>
          <td className='widgetLargeStatus'>
            <Buttone type ="Declined"/>
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img className='widgetLargeImg' src='https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg' alt='sorry'/>
            <span className='widgetLargeName'>Susan Carol</span>
          </td>
          <td className='widgetLargeDate'>
            7 July 2022
          </td>
          <td className='widgetLargeAmount'>
            #122.00
          </td>
          <td className='widgetLargeStatus'>
            <Buttone type ="Pending"/>
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img className='widgetLargeImg' src='https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg' alt='sorry'/>
            <span className='widgetLargeName'>Susan Carol</span>
          </td>
          <td className='widgetLargeDate'>
            7 July 2022
          </td>
          <td className='widgetLargeAmount'>
            #122.00
          </td>
          <td className='widgetLargeStatus'>
            <Buttone type ="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
