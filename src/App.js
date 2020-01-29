import React from 'react';
import Body from './Component/Body.js';
import Header from './Component/Header.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
	constructor(props) {
  	super(props);
  	console.log(this.props.list);
  }
	handleSortAplha = () => {
		console.log("hello")
	}

  render() {
		const listOfMovies = this.props.list
  	return (
    	<div className='widget'>
				<table className="table table-hover">
					<Header
						handleSortAplha={this.handleSortAplha}
					/>

					{listOfMovies.map( (list, index) =>
						<Body
						amount={index}
						titleName={list.titleName}
						distributorName={list.distributorName}
						weekendRev={list.weekendRev}
						locs={list.locs}
						locAvg={list.locAvg}
						cumeRev={list.cumeRev}
						/>
					)}

				</table>
			</div>
    );
  }
}

export default App;
