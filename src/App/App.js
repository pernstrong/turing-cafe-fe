import React, { Component } from 'react';
import './App.css';

import ReservationsContainer from "../ReservationsContainer/ReservationsContainer"
import Form from "../Form/Form"

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

  addReservation = ({name, date, time, number}) => {
    const newReservation = {
      date,
      id: Date.now(),
      name,
      number,
      time
    }
    this.setState({reservations: [...this.state.reservations, newReservation]})
    this.postNewReservation(newReservation)
  }

  postNewReservation = ({ name, date, time, number}) => {
    console.log(name, date, time, number)
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        date,
        time,
        number
      })
    })
    .then(response => response.json())
    .catch(err => console.error(err))
  }

  cancelReservation = id => {
    console.log(id)
    const remainingReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({reservations: remainingReservations})
    this.deleteResoFromApi(id)
  }

  deleteResoFromApi = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .catch(err => console.error(err))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
