import React from 'react';
import './Style/Content.scss'

let Content = (props)  =>  {
  let colStyle;
  if(props.ListStyleNum % 2 === 0){
    colStyle = 'greycolor'
  } else {
    colStyle = 'whiteColor'
  }
  return(
    <tr className={colStyle}>
      <td className="fontStyle">{props.amountOfMovies}</td>
      <td className="fontStyle">{props.titleName}</td>
      <td className="fontStyle">{props.distributorName}</td>
      <td className="fontStyle">${props.weekendRev}</td>
      <td className="fontStyle">{props.locs}</td>
      <td className="fontStyle">${props.locAvg}</td>
      <td className="fontStyle">${props.cumeRev}</td>
    </tr>
  )
}

export default Content
