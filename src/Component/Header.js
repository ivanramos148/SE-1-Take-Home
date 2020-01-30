import React from 'react';
import './Style/Header.scss'
let Header = (props) => {
  return(
     <thead className="thead">
      <tr className="title-style">
        <td>#</td>
        <td onClick={ () => props.handleSortByTitleName()}>
          <span>Title</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>

        <td onClick={ () => props.handleSortByDistrubutor()}>
          <span>Distributor Name</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>

        <td onClick={ () => props.handleSortByweekrev()}>
          <span>Weekend Total</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>


        <td onClick={ () => props.handleSortByLocs()}>
          <span># of Locs</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>


        <td onClick={ () => props.handleSortByAvgLoc()}>
          <span>Loc Avg</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>


        <td onClick={ () => props.handleSortByCumeRev()}>
          <span>Cume Total</span>
          <span className="iconStyle">
            <i className='fas fa-long-arrow-alt-down'></i>
            <i className='fas fa-long-arrow-alt-up'></i>
          </span>
        </td>

      </tr>
    </thead>
  )
}

export default Header;
