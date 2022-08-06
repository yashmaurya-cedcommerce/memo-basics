import React, { Component } from 'react'
import { MemoizedChild } from './Task2Child';

export default class Task2Parent extends Component {

  // constructor to store a state variable 

  constructor(props) {
    super(props);
    this.state = { name: "Yash" };
  }

  // consoles name after every 2 seconds using setInterval 

  componentDidMount() {
    setInterval(() => {
      console.log(this.state.name)

    }, 2000)
  }

  render() {
    return (
      <div className='my-5'>

        <h3>Task 2</h3>

        <h5>Check Console</h5>

        {/* calling child component  */}

        <MemoizedChild />

      </div>
    )
  }
}
