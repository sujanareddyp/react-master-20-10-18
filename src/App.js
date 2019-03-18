import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      value: e.target.value
    })
  }

  save = () => {
    //Do something
    alert(1);
    this.props.dispatch({
      type: "ADD_TO_LIST",
      value: this.state.value
    })
  }
  render() {
    const lists = this.props.listReducer.list.map((e,i) => {
      return <li key={i}>{e}</li>
    })
    return (
      <div className="App">
      <h1>Parent</h1>
        {lists}
        <Child />
        <input type="text" value={this.state.value} placeholde="User input" onChange={this.handleChange} />
        <button onClick={this.save}>Save to list</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return store
}
export default connect(mapStoreToProps)(App);
