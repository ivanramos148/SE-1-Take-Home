import React from 'react';
import './Style/Header.scss';

class Header extends React.Component {
  render(){

    return(
      <thead className="thead">
        <tr className="title-style">
          <th onClick={ () => this.props.handleSortAplha() }>#</th>
          <th>Title</th>
          <th>Distrubutor Name</th>
          <th>Weekend Total</th>
          <th># of Locs</th>
          <th>Locs Avg</th>
          <th>Cume Total</th>
        </tr>
      </thead>
    )
  }
}

export default Header
