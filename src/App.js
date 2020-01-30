import React, {Component} from 'react';
import Body from './Component/Body.js';
import Header from './Component/Header.js';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends Component {
	constructor(props) {
  	super(props);
		this.handleSortByTitleName = this.handleSortByTitleName.bind(this)
		this.handleSortByDistrubutor = this.handleSortByDistrubutor.bind(this)
		this.handleSortByweekrev = this.handleSortByweekrev.bind(this)
		this.handleSortByLocs = this.handleSortByLocs.bind(this)
		this.handleSortByAvgLoc = this.handleSortByAvgLoc.bind(this)
		this.handleSortByCumeRev = this.handleSortByCumeRev.bind(this)
		this.state = {
			listOfMovies: this.props.list,
			sortAscending: true
		}
  }

	handleSortByLocs() {
	 let newData = this.state.listOfMovies.sort((objectA, objectB) => {
	  if (this.state.sortAscending) {
	   return objectA.locs - objectB.locs;
	 } else {
	   return objectB.locs - objectA.locs;
		}
	 })
	 this.setState({
		sortAscending: !this.state.sortAscending,
		listOfMovies: newData})
	}

	handleSortByAvgLoc(){
		let newData = this.state.listOfMovies.sort((objectA, objectB) => {
		 if (this.state.sortAscending) {
			return objectA.locAvg - objectB.locAvg;
		} else {
			return objectB.locAvg - objectA.locAvg;
		 }
		})
		this.setState({
		 sortAscending: !this.state.sortAscending,
		 listOfMovies: newData})
	}

	handleSortByCumeRev(){
		let newData = this.state.listOfMovies.sort((objectA, objectB) => {
		 if (this.state.sortAscending) {
			return objectA.cumeRev - objectB.cumeRev;
		} else {
			return objectB.cumeRev - objectA.cumeRev;
		 }
		})
		this.setState({
		 sortAscending: !this.state.sortAscending,
		 listOfMovies: newData})
	 }

	handleSortByweekrev(){
		let newData = this.state.listOfMovies.sort((objectA, objectB) => {
		 if (this.state.sortAscending) {
			return objectA.weekendRev - objectB.weekendRev;
		} else {
			return objectB.weekendRev - objectA.weekendRev;
		 }
		})
		this.setState({
		 sortAscending: !this.state.sortAscending,
		 listOfMovies: newData})
	}

	handleSortByDistrubutor(){
		let newData = this.state.listOfMovies.sort((objectA, objectB) =>{
		 if (this.state.sortAscending) {
			return objectA.distributorName.localeCompare(objectB.distributorName);
		} else {
			return objectB.distributorName.localeCompare(objectA.distributorName);
		 }
		})
		this.setState({
			sortAscending: !this.state.sortAscending,
		 listOfMovies: newData})
	}

	handleSortByTitleName(){
		let newData = this.state.listOfMovies.sort((objectA, objectB) =>{
		 if (this.state.sortAscending) {
			return objectA.titleName.localeCompare(objectB.titleName);
		} else {
			return objectB.titleName.localeCompare(objectA.titleName);
		 }
		})
		this.setState({
			sortAscending: !this.state.sortAscending,
		  listOfMovies: newData
		})
	}

  render() {
		let totalMovies = this.props.list.length
  	return (
    	<div className='widget'>
				<table className="table ">
					<Header
						handleSortByTitleName={this.handleSortByTitleName}
						handleSortByDistrubutor={this.handleSortByDistrubutor}
						handleSortByweekrev={this.handleSortByweekrev}
						handleSortByLocs={this.handleSortByLocs}
						handleSortByAvgLoc={this.handleSortByAvgLoc}
						handleSortByCumeRev={this.handleSortByCumeRev}
					/>
					<Body array={this.state.listOfMovies} />
				</table>
				<p>Showing 1 out of {totalMovies} out of {totalMovies} entries.</p>
			</div>
    );
  }
}

export default App;
