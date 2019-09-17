import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increaseCount, decreaseCount, resetCount} from '../actions/index';

class Counter extends Component {
  render() {
    return (
      <div> 
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.handleIncrease}> Increase </button>
        <button onClick={this.props.handleDecrease}> Decrease </button>
        <button onClick={this.props.handleReset}> Reset </button>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
  console.log(state);
  
  return {
    count : state.counter.count
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);