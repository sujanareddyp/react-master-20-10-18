import React, { Component } from 'react';
import {connect} from 'react-redux';
class Child extends Component {
  render() {
    const lists = this.props.listReducer.list.map((e,i) => {
      return <li key={i}>{e}</li>
    })
    return (
      <div className="App">
      <h2>Child</h2>
        {lists}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return store;
}

export default connect(mapStoreToProps)(Child);
