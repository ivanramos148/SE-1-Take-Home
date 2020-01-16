import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
  	super(props);
    
  	console.log(this.props.list);
  }
  
  render() {
  	return (
    	<div className='widget'>Widget</div>
    );
  }
}

export default App;
