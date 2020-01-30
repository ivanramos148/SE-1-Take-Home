import React from 'react';
import Content from './Content.js';

let Body = (props) => {
  let listOfMovies = props.array

  return(
    <tbody>
      {listOfMovies.map( (list, index) =>
        <Content
          ListStyleNum={index}
          amountOfMovies={list.id}
          titleName={list.titleName}
          distributorName={list.distributorName}
          weekendRev={list.weekendRev}
          locs={list.locs}
          locAvg={list.locAvg}
          cumeRev={list.cumeRev}
          key={index}
        />)}
    </tbody>
  )
}

export default Body
