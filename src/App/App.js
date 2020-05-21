import React, { Component } from 'react';
import './App.css';

import ReservationsContainer from "../ReservationsContainer/ReservationsContainer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations')
    const reservations = await response.json()
    this.setState({ reservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
