import React, { Component } from 'react';
import './App.css';

import ReservationsContainer from "../ReservationsContainer/ReservationsContainer"
import Form from "../Form/Form"
import { getReservations, postReservation, deleteReservation } from "../apiCalls/apiCalls"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    const reservations = await getReservations()
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

  postNewReservation = async ({ name, date, time, number}) => {
    postReservation(name, date, time, number)
    .then(response => response.json())
    .catch(err => console.error(err))
  }

  deleteResoFromApi = id => {
    deleteReservation(id)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  
  cancelReservation = id => {
    const remainingReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({reservations: remainingReservations})
    this.deleteResoFromApi(id)
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
