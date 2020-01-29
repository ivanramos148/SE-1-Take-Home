import React from 'react';
let Body = (props) => {
  return(
    <tbody>
      <tr>
        <td>#{props.amount}</td>
        <td>{props.titleName}</td>
        <td>{props.distributorName}</td>
        <td>{props.weekendRev}</td>
        <td>{props.weekendRev}</td>
        <td>{props.locs}</td>
        <td>{props.cumeRev}</td>
      </tr>
    </tbody>
  )
}
export default Body
